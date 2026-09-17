import Image from "next/image";
import { Eyebrow } from "../ui/Eyebrow";
import { CheckIcon } from "../ui/Icons";

const rows = [
  {
    eyebrow: "One dashboard",
    title: "Run your whole catalog from a single screen.",
    body: "Prodiify connects directly to your Shopify store and shows every product's optimization status at a glance — so you always know what's ranking and what needs work.",
    bullets: [
      "Live inside Shopify admin — nothing to install on your theme",
      "Bulk-optimize hundreds of products in one pass",
      "Track text and image credits as you go",
    ],
    address: "admin.shopify.com/apps/prodiify",
    image:
      "https://cdn.shopify.com/app-store/listing_images/184b4b0a54e38d25bc6e88fc6d5ccf97/promotional_image/CJnmh6309ZYDEAE=.jpeg?height=1800&quality=90&width=3200",
    alt: "Prodiify AI-powered Shopify dashboard for SEO and product management",
    flip: false,
  },
  {
    eyebrow: "AI copy that converts",
    title: "Titles, descriptions, and tags in your store's voice.",
    body: "Give Prodiify a product and it writes the whole listing — an SEO title, a persuasive description, meta tags, and alt text — all optimized for the keywords shoppers actually search.",
    bullets: [
      "Keyword-aware titles and meta descriptions",
      "Structured for Google and Shopify search ranking",
      "Edit and publish, or accept and move on",
    ],
    address: "prodiify · generate content",
    image:
      "https://cdn.shopify.com/app-store/listing_images/184b4b0a54e38d25bc6e88fc6d5ccf97/desktop_screenshot/CJrL9JyenZUDEAE=.png?height=900&width=1600",
    alt: "Prodiify AI Shopify app generating SEO titles, descriptions, and tags",
    flip: true,
  },
  {
    eyebrow: "AI imagery",
    title: "Studio-quality product images, generated on demand.",
    body: "Fill gaps in your catalog with clean, consistent product visuals. Better images mean better listings — and higher conversion on every page.",
    bullets: [
      "Generate on-brand imagery in a click",
      "Descriptive alt text added automatically",
      "No design tools or stock-photo hunting",
    ],
    address: "prodiify · image generator",
    image:
      "https://cdn.shopify.com/app-store/listing_images/184b4b0a54e38d25bc6e88fc6d5ccf97/desktop_screenshot/CPSAgJ2enZUDEAE=.png?height=900&width=1600",
    alt: "Prodiify AI-powered Shopify product image generator for ecommerce SEO",
    flip: false,
  },
  {
    eyebrow: "Prodiify MediaXL",
    title: "Build A+ product content, no developer needed.",
    body: "Turn plain product pages into rich, story-driven content using ready-made blocks — drag, drop, and publish visuals that sell, right inside Shopify.",
    bullets: [
      "Six ready-made blocks: Image + Text, Gallery, Feature List, Banner/Hero, Video, and Carousel",
      "Drag, drop, and publish rich content that sells, right inside Shopify",
      "Fully responsive on every device, straight out of the box",
    ],
    address: "prodiify · MediaXL builder",
    image:
      "https://cdn.shopify.com/app-store/listing_images/184b4b0a54e38d25bc6e88fc6d5ccf97/desktop_screenshot/CJPkka309ZYDEAE=.jpeg?height=1800&quality=90&width=3200",
    alt: "Prodiify MediaXL A+ content builder with drag-and-drop blocks for Shopify product pages",
    flip: true,
  },
];

export function ShowcaseRows() {
  return (
    <section className="pt-0 pb-24">
      <div className="wrap flex flex-col gap-16 md:gap-24">
        {rows.map((row) => (
          <div
            key={row.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center`}
          >
            <div className={row.flip ? "md:order-2" : ""}>
              <Eyebrow>{row.eyebrow}</Eyebrow>
              <h3 className="font-display font-bold text-[clamp(1.5rem,2.8vw,2rem)] leading-[1.12] tracking-[-0.02em] my-3.5">
                {row.title}
              </h3>
              <p className="text-base text-ink-2 mb-[22px]">{row.body}</p>
              <ul className="flex flex-col gap-3">
                {row.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-[11px] items-start text-[15px] text-ink">
                    <span className="flex-none w-[22px] h-[22px] rounded-full bg-bg-mint grid place-items-center mt-px">
                      <CheckIcon className="w-[13px] h-[13px] text-green-deep" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className={row.flip ? "md:order-1" : ""}>
              <div className="bg-white border border-line rounded-2xl overflow-hidden shadow-card-lg">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line-2 bg-bg-soft">
                  <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5A9A0]" />
                  <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5D48A]" />
                  <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#A9DDB0]" />
                  <span className="ml-3 font-mono text-[11.5px] text-muted">{row.address}</span>
                </div>
                <Image
                  src={row.image}
                  alt={row.alt}
                  width={1600}
                  height={900}
                  className="w-full h-auto block bg-[#f3f6f9]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
