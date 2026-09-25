import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.WORDPRESS_REVALIDATE_SECRET || secret !== process.env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const slug = body?.slug as string | undefined;

  revalidateTag("wordpress-posts", "max");
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({ revalidated: true, slug: slug ?? null, now: Date.now() });
}
