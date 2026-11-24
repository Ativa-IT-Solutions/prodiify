import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { AplusBlocks } from "@/components/sections/AplusBlocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHead } from "@/components/ui/SectionHead";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

const SHOPIFY_URL = "https://apps.shopify.com/prodiify";

export const metadata: Metadata = {
  title: "A+ Content for Shopify: AI Product Page Builder | Prodiify",
  description:
    "Create Amazon-style A+ Content for Shopify product pages with Prodiify MediaXL. Build rich product pages using images, galleries, videos and feature blocks. No coding needed.",
  alternates: { canonical: "/a-plus-content" },
};

const heroChips = ["Free plan available", "No developer needed", "Nothing to install on your theme"];

const platforms = [
  {
    tag: "On Amazon",
    name: "A+ Content",
    body: "Brand sellers replace a plain description with enhanced images and text modules. This is where the name A+ content comes from.",
  },
  {
    tag: "On Walmart",
    name: "Rich Media",
    body: "The same idea under a different name: product pages built from richer images, text and media instead of plain copy.",
  },
  {
    tag: "On Shopify",
    name: "Prodiify MediaXL",
    body: "Turns plain product pages into rich, story-driven content using ready-made blocks, right inside Shopify with no theme edits.",
  },
];

const benefits = [
  { title: "Shoppers see the product", body: "Images and layouts show the details a paragraph can only describe." },
  { title: "Pages are easy to scan", body: "Feature lists, banners and galleries break one long block into clear pieces." },
  { title: "Search can read it", body: "Descriptive alt text and clean tags are added, the details search engines actually read." },
];

const steps = [
  {
    num: "01",
    title: "Connect your store",
    body: "Install Prodiify from the Shopify App Store. It syncs with your product catalog instantly, no theme edits.",
  },
  {
    num: "02",
    title: "Build with blocks",
    body: "Add Image + Text, Gallery, Feature List, Banner/Hero, Video and Carousel to the page and fill each one with your product details.",
  },
  {
    num: "03",
    title: "Publish and get found",
    body: "Push polished pages live in seconds and start getting discovered on Google, Shopify, and AI search.",
  },
];

export default function APlusContentPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(120deg, #eaf3fb 0%, #ebf8f0 100%)" }}
          />
          <div className="wrap pt-16 md:pt-24 pb-16 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center">
            <div>
              <Eyebrow>A+ Content for Shopify</Eyebrow>
              <h1 className="font-display font-bold text-[clamp(2.1rem,5vw,3.4rem)] leading-[1.06] tracking-[-0.02em] my-4">
                Make every product page worth scrolling.
              </h1>
              <p className="text-[17px] md:text-[18px] text-ink-2 max-w-[52ch] mb-7">
                Amazon sellers have A+ Content. Walmart sellers have Rich Media. Prodiify MediaXL gives your
                Shopify store the same rich, story-driven product page, built from ready-made blocks you assemble
                and publish, right inside Shopify.
              </p>
              <div className="flex flex-wrap items-center gap-3.5">
                <Button href={SHOPIFY_URL} variant="primary" size="lg">
                  Install free
                  <ArrowRightIcon />
                </Button>
                <Button href="#what" variant="ghost" size="lg" external={false}>
                  What is A+ content?
                </Button>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                {heroChips.map((chip) => (
                  <li key={chip} className="flex items-center gap-2 text-[14px] text-ink-2">
                    <span className="flex-none w-[20px] h-[20px] rounded-full bg-white grid place-items-center shadow-card-sm">
                      <CheckIcon className="w-[12px] h-[12px] text-green-deep" />
                    </span>
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plain page vs A+ content mockup */}
            <div className="bg-white border border-line rounded-2xl shadow-card-lg overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line-2 bg-bg-soft">
                <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5A9A0]" />
                <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5D48A]" />
                <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#A9DDB0]" />
                <span className="ml-3 font-mono text-[11px] text-muted truncate">
                  yourstore.com / products / weekender
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line-2">
                {/* Plain */}
                <div className="p-5">
                  <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted">Plain page</span>
                  <div className="mt-3 aspect-[4/3] rounded-lg bg-bg-soft" />
                  <div className="mt-3 h-3 w-5/6 rounded bg-line" />
                  <div className="mt-2.5 flex flex-col gap-1.5">
                    <div className="h-2 w-full rounded bg-line-2" />
                    <div className="h-2 w-full rounded bg-line-2" />
                    <div className="h-2 w-2/3 rounded bg-line-2" />
                  </div>
                  <p className="mt-3 text-[11.5px] text-muted italic">One block of text. That is the whole story.</p>
                </div>
                {/* A+ */}
                <div className="p-5 bg-bg-mint/40">
                  <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-green-deep">
                    With A+ content
                  </span>
                  <div className="mt-3 aspect-[16/7] rounded-lg grid place-items-center text-white text-[11px] font-display font-semibold bg-gradient-to-r from-blue to-green">
                    Banner / Hero
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {["Padded shoulder strap", "Shoe compartment", "Water-resistant lining"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[11.5px] text-ink">
                        <CheckIcon className="w-[12px] h-[12px] text-green-deep flex-none" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="aspect-square rounded bg-white border border-line-2" />
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] text-green-deep font-medium">Alt text and tags added · Responsive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is A+ content */}
        <section id="what" className="py-24">
          <div className="wrap">
            <SectionHead
              eyebrow="What is A+ content"
              title="A product page that tells a story, not just a spec."
              description="A+ content is the rich section of a product page that goes beyond the title and a block of text. It combines images, headlines, feature lists, galleries and video into one layout that shows what the product is, why it is good and how it fits into a shopper's life."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
              {platforms.map((p) => (
                <div key={p.name} className="bg-white border border-line rounded-[18px] p-7">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-soft border border-line-2 px-3 py-1 font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl mt-3.5 mb-2.5 grad-text inline-block">{p.name}</h3>
                  <p className="text-[14.5px] text-ink-2">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-[22px] grid grid-cols-1 md:grid-cols-3 gap-[22px]">
              {benefits.map((b) => (
                <div key={b.title} className="bg-bg-soft rounded-[18px] p-7">
                  <span className="flex-none w-[34px] h-[34px] rounded-[10px] grid place-items-center mb-4 text-white bg-gradient-to-r from-blue to-green">
                    <CheckIcon className="w-[16px] h-[16px]" />
                  </span>
                  <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-[14.5px] text-ink-2">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six ready-made blocks */}
        <section id="blocks" className="py-24 bg-bg-soft">
          <div className="wrap">
            <SectionHead
              center
              eyebrow="Six ready-made blocks"
              title="Build A+ product content, block by block."
              description="Build and publish rich content that sells, right inside Shopify. Every block is fully responsive straight out of the box."
            />
            <AplusBlocks />
          </div>
        </section>

        {/* Three steps */}
        <section className="py-24">
          <div className="wrap">
            <SectionHead
              center
              eyebrow="Three steps"
              title="From plain page to A+ page in minutes."
              description="No onboarding calls, no setup checklist. Install, build, publish."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
              {steps.map((step, i) => (
                <div key={step.num} className="relative bg-white border border-line rounded-[18px] p-7">
                  <div className="w-[34px] h-[34px] rounded-[10px] grid place-items-center mb-[18px] text-white font-mono font-bold text-[13px] bg-gradient-to-r from-blue to-green">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <span className="hidden md:block absolute top-[44px] right-0 -mr-[22px] w-[22px] h-0.5 bg-line z-10" />
                  )}
                  <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-[14.5px] text-ink-2">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="pb-24">
          <div className="wrap">
            <div
              className="relative overflow-hidden rounded-[26px] px-6 md:px-10 py-14 md:py-[60px] text-center text-white shadow-card-lg"
              style={{ background: "linear-gradient(100deg, var(--blue) 0%, var(--green) 100%)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(60% 120% at 50% -10%, rgba(255,255,255,0.22), transparent 60%)",
                }}
              />
              <h2 className="relative font-display font-bold text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.1] tracking-[-0.02em] mb-3.5">
                Give every product its own A+ page.
              </h2>
              <p className="relative text-[17px] opacity-90 max-w-[48ch] mx-auto mb-7">
                Install Prodiify MediaXL from the Shopify App Store and build your first A+ content page today. The
                free plan is there when you want to start.
              </p>
              <Button href={SHOPIFY_URL} variant="white" size="lg" className="relative">
                Install free
                <ArrowRightIcon />
              </Button>
              <div className="relative mt-4 text-[13.5px] opacity-85">No developer needed · Ready in seconds</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
