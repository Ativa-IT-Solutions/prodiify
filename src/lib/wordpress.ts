const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export type WPImage = {
  sourceUrl: string;
  altText: string;
  width?: number | null;
  height?: number | null;
};

export type WPTerm = {
  name: string;
  slug: string;
};

export type WPPostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: WPImage | null;
  categories: WPTerm[];
};

export type WPPost = WPPostSummary & {
  content: string;
  tags: WPTerm[];
  author: { name: string } | null;
};

export type WPPostList = {
  posts: WPPostSummary[];
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null; startCursor: string | null };
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

async function wpFetch<T>(query: string, variables: Record<string, unknown>, revalidate: number): Promise<T> {
  if (!WORDPRESS_API_URL) {
    throw new Error("WORDPRESS_API_URL is not configured");
  }

  const res = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags: ["wordpress-posts"] },
  });

  if (!res.ok) {
    throw new Error(`WordPress API responded with ${res.status}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(`WordPress API error: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  if (!json.data) {
    throw new Error("WordPress API returned no data");
  }

  return json.data;
}

function mapImage(node: { sourceUrl: string; altText: string; mediaDetails?: { width: number; height: number } | null } | null | undefined): WPImage | null {
  if (!node) return null;
  return {
    sourceUrl: node.sourceUrl,
    altText: node.altText,
    width: node.mediaDetails?.width ?? null,
    height: node.mediaDetails?.height ?? null,
  };
}

const POST_SUMMARY_FIELDS = `
  id
  slug
  title
  excerpt
  date
  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
  categories(first: 3) {
    nodes {
      name
      slug
    }
  }
`;

function mapPostSummary(node: {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featuredImage?: { node: Parameters<typeof mapImage>[0] } | null;
  categories?: { nodes: WPTerm[] } | null;
}): WPPostSummary {
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    excerpt: node.excerpt,
    date: node.date,
    featuredImage: mapImage(node.featuredImage?.node),
    categories: node.categories?.nodes ?? [],
  };
}

export async function getPosts(options: { first?: number; after?: string | null } = {}): Promise<WPPostList> {
  const { first = 9, after = null } = options;

  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { status: PUBLISH }) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          ${POST_SUMMARY_FIELDS}
        }
      }
    }
  `;

  const data = await wpFetch<{
    posts: {
      pageInfo: WPPostList["pageInfo"];
      nodes: Parameters<typeof mapPostSummary>[0][];
    };
  }>(query, { first, after }, 300);

  return {
    posts: data.posts.nodes.map(mapPostSummary),
    pageInfo: data.posts.pageInfo,
  };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_SUMMARY_FIELDS}
        content
        author {
          node {
            name
          }
        }
        tags(first: 10) {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const data = await wpFetch<{
    post:
      | (Parameters<typeof mapPostSummary>[0] & {
          content: string;
          author?: { node: { name: string } } | null;
          tags?: { nodes: WPTerm[] } | null;
        })
      | null;
  }>(query, { slug }, 300);

  if (!data.post) return null;

  return {
    ...mapPostSummary(data.post),
    content: data.post.content,
    author: data.post.author?.node ?? null,
    tags: data.post.tags?.nodes ?? [],
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `
    query GetAllPostSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await wpFetch<{ posts: { nodes: { slug: string }[] } }>(query, {}, 300);
  return data.posts.nodes.map((node) => node.slug);
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
