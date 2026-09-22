import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getPosts, stripHtml, formatPostDate } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog — Prodiify",
  description:
    "SEO, AI search, and ecommerce merchandising tips for Shopify sellers, from the team behind Prodiify.",
};

const PAGE_SIZE = 9;

export default async function BlogIndexPage({ searchParams }: PageProps<"/blog">) {
  const { after } = await searchParams;
  const cursor = typeof after === "string" ? after : null;

  let posts: Awaited<ReturnType<typeof getPosts>>["posts"] = [];
  let pageInfo: Awaited<ReturnType<typeof getPosts>>["pageInfo"] | null = null;
  let loadError = false;

  try {
    const result = await getPosts({ first: PAGE_SIZE, after: cursor });
    posts = result.posts;
    pageInfo = result.pageInfo;
  } catch (error) {
    console.error("[blog] failed to load posts:", error);
    loadError = true;
  }

  return (
    <>
      <Nav />
      <main className="wrap py-16">
        <Eyebrow>From the blog</Eyebrow>
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] my-3.5">
          SEO and AI search tips for Shopify sellers
        </h1>
        <p className="text-base text-ink-2 max-w-[620px] mb-12">
          Practical guides on product SEO, AI-powered merchandising, and getting found on Google, Shopify search,
          and engines like ChatGPT, Gemini, and Perplexity.
        </p>

        {loadError && (
          <p className="text-[15px] text-muted border border-line-2 rounded-xl bg-bg-soft p-6">
            We couldn&apos;t load blog posts right now. Please check back shortly.
          </p>
        )}

        {!loadError && posts.length === 0 && (
          <p className="text-[15px] text-muted border border-line-2 rounded-xl bg-bg-soft p-6">
            No posts published yet — check back soon.
          </p>
        )}

        {!loadError && posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-line overflow-hidden bg-white shadow-card-sm hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="aspect-[16/9] bg-bg-soft overflow-hidden">
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage.sourceUrl}
                        alt={post.featuredImage.altText || post.title}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2.5 p-5">
                    {post.categories.length > 0 && (
                      <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-blue-deep">
                        {post.categories[0].name}
                      </span>
                    )}
                    <h2 className="font-display font-semibold text-lg leading-snug text-ink group-hover:text-blue-deep transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[14.5px] text-ink-2 leading-relaxed line-clamp-3">{stripHtml(post.excerpt)}</p>
                    <span className="font-mono text-[12px] text-muted mt-1">{formatPostDate(post.date)}</span>
                  </div>
                </Link>
              ))}
            </div>

            {(pageInfo?.hasNextPage || cursor) && (
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-line-2">
                {cursor ? (
                  <Link href="/blog" className="text-[14.5px] font-medium text-ink-2 hover:text-blue-deep transition-colors">
                    ← Back to latest
                  </Link>
                ) : (
                  <span />
                )}
                {pageInfo?.hasNextPage && pageInfo.endCursor && (
                  <Link
                    href={`/blog?after=${encodeURIComponent(pageInfo.endCursor)}`}
                    className="text-[14.5px] font-medium text-blue-deep hover:underline"
                  >
                    Older posts →
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
