import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { getAllPostSlugs, getPostBySlug, stripHtml, formatPostDate } from "@/lib/wordpress";

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    return { title: "Post not found — Prodiify" };
  }

  const description = stripHtml(post.excerpt).slice(0, 160);

  return {
    title: `${post.title} — Prodiify Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      images: post.featuredImage ? [{ url: post.featuredImage.sourceUrl }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: post.featuredImage?.sourceUrl,
    author: post.author ? { "@type": "Person", name: post.author.name } : undefined,
    publisher: { "@type": "Organization", name: "Prodiify" },
  };

  return (
    <>
      <Nav />
      <main className="wrap py-16 max-w-[760px]">

        <h1 className="font-display font-bold text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mt-4 mb-3.5">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 flex-wrap text-[13.5px] text-muted mb-8">
          <span className="font-mono">{formatPostDate(post.date)}</span>
          {/* {post.author && <span>By {post.author.name}</span>} */}
          {post.categories.map((category) => (
            <span
              key={category.slug}
              className="font-mono text-[11px] tracking-[0.06em] uppercase text-blue-deep bg-bg-soft border border-line-2 rounded-full px-2.5 py-1"
            >
              {category.name}
            </span>
          ))}
        </div>

        {post.featuredImage && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-bg-soft mb-10">
            <Image
              src={post.featuredImage.sourceUrl}
              alt={post.featuredImage.altText || post.title}
              width={1200}
              height={675}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="text-[15.5px] leading-[1.75] text-ink-2 [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3.5 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_li]:mb-1.5 [&_a]:text-blue-deep [&_a]:underline [&_a]:underline-offset-2 [&_img]:rounded-xl [&_img]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-line [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-ink-2 [&_strong]:text-ink [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-10 pt-6 border-t border-line-2">
            <span className="text-[13px] text-muted">Tagged:</span>
            {post.tags.map((tag) => (
              <span
                key={tag.slug}
                className="text-[13px] text-ink-2 bg-bg-soft border border-line-2 rounded-full px-2.5 py-1"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
