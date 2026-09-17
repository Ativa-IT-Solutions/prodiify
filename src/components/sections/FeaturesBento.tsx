import { SectionHead } from "../ui/SectionHead";
import {
  BoltIcon,
  ImageIcon,
  LayersIcon,
  LayersTreeIcon,
  SearchIcon,
  ShieldCheckIcon,
} from "../ui/Icons";

const cards = [
  {
    span: "md:col-span-2",
    green: true,
    icon: <ImageIcon />,
    title: "AI product images",
    body: "Create clean, on-brand product visuals that lift listing quality and conversions — no photographer or designer required.",
  },
  {
    span: "md:col-span-2",
    green: false,
    icon: <BoltIcon />,
    title: "Publish in seconds",
    body: "Push SEO-ready content straight to your store instantly. Optimize one product or your entire catalog in bulk.",
  },
  {
    span: "md:col-span-2",
    green: true,
    icon: <SearchIcon className="w-[22px] h-[22px]" />,
    title: "Found on AI engines",
    body: "Structure content so ChatGPT, Gemini, and Perplexity surface your products when shoppers ask them what to buy.",
  },
  {
    span: "md:col-span-2",
    green: false,
    icon: <LayersIcon />,
    title: "A+ content, no code",
    body: "Build rich, drag-and-drop A+ product content without touching a theme file or hiring a developer.",
  },
  {
    span: "md:col-span-2",
    green: true,
    icon: <ShieldCheckIcon />,
    title: "Alt text & meta tags",
    body: "Every image gets descriptive alt text and every page gets clean meta tags — the details search engines actually read.",
  },
];

export function FeaturesBento() {
  return (
    <section className="py-24" id="features">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="What Prodiify does"
          title="Everything your listings need to rank — in one app."
          description="Skip the copywriting, the meta-tag guesswork, and the design tools. Prodiify turns thin product pages into search-ready listings automatically."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-[18px]">
          <div
            className="md:col-span-4 sm:col-span-2 rounded-[18px] border border-[#DCEAF3] p-[26px] relative overflow-hidden"
            style={{ background: "linear-gradient(120deg, #EAF3FB 0%, #EBF8F0 100%)" }}
          >
            <div className="w-11 h-11 rounded-xl grid place-items-center mb-4 bg-bg-mint text-green-deep border border-[#CFEEDA]">
              <LayersTreeIcon />
            </div>
            <h3 className="font-display font-semibold text-[19px] tracking-[-0.01em] mb-2">
              AI titles, descriptions &amp; tags, tuned for SEO
            </h3>
            <p className="text-[14.5px] text-ink-2">
              Generate keyword-rich product titles, meta descriptions, and tags that are built to rank on Google
              and Shopify search — written in your store&apos;s voice.
            </p>
            <div className="mt-5 bg-white border border-line rounded-xl px-4 py-3.5 shadow-card-sm">
              <div className="font-mono text-[11px] text-green-deep mb-1">yourstore.com › products</div>
              <div className="font-display font-semibold text-[15px] text-[#1a5fb4] mb-1">
                Organic Cotton Oversized Hoodie — Unisex, Pre-Shrunk
              </div>
              <div className="text-[12.5px] text-muted leading-[1.45]">
                Soft, breathable organic cotton hoodie with a relaxed fit and double-lined hood. Ethically made and
                machine washable.
              </div>
              <div className="flex gap-1.5 mt-5 flex-wrap">
                <span className="font-mono text-[11.5px] text-blue-deep bg-bg-soft border border-[#DCEAF6] rounded-[7px] px-2.5 py-1">
                  oversized hoodie
                </span>
                <span className="font-mono text-[11.5px] text-blue-deep bg-bg-soft border border-[#DCEAF6] rounded-[7px] px-2.5 py-1">
                  organic cotton
                </span>
                <span className="font-mono text-[11.5px] text-green-deep bg-bg-mint border border-[#CFEEDA] rounded-[7px] px-2.5 py-1">
                  SEO title ✓
                </span>
              </div>
            </div>
          </div>

          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.span} rounded-[18px] border border-line p-[26px] transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md hover:border-[#D8E4EF]`}
            >
              <div
                className={`w-11 h-11 rounded-xl grid place-items-center mb-4 border ${
                  card.green
                    ? "bg-bg-mint text-green-deep border-[#CFEEDA]"
                    : "bg-bg-soft text-blue-deep border-[#E1EDF7]"
                }`}
              >
                {card.icon}
              </div>
              <h3 className="font-display font-semibold text-[19px] tracking-[-0.01em] mb-2">{card.title}</h3>
              <p className="text-[14.5px] text-ink-2">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
