import { Button } from "../ui/Button";
import { ArrowRightIcon, CheckIcon, ImageIcon, SearchIcon } from "../ui/Icons";

const SHOPIFY_URL = "https://apps.shopify.com/prodiify";

const notes = ["No developer needed", "Ready in seconds", "Bulk your whole catalog"];

export function Hero() {
  return (
    <section className="relative pt-[74px] pb-[90px] overflow-hidden" id="top">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 82% 8%, rgba(16,179,75,0.10), transparent 60%), radial-gradient(55% 50% at 12% 4%, rgba(65,143,209,0.12), transparent 60%)",
        }}
      />
      <div className="wrap grid grid-cols-1 md:grid-cols-[3fr_3fr] gap-14 md:gap-[56px] items-center">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 mb-[22px] flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.03em] px-3 py-1.5 rounded-full border border-line bg-white text-ink-2 shadow-card-sm">
              <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_0_3px_rgba(16,179,75,0.15)]" />
              Built for the Shopify App Store
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.03em] px-3 py-1.5 rounded-full border border-line bg-white text-ink-2 shadow-card-sm">
              Free plan available
            </span>
          </div>
          <h1 className="font-display font-bold text-[clamp(2.35rem,5.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] mb-5">
            Product listings that <span className="grad-text">write themselves</span> and rank.
          </h1>
          <p className="text-lg text-ink-2 max-w-[34ch] mb-[30px]">
            Prodiify uses AI to generate SEO-ready titles, descriptions, tags, and images for your whole catalog —
            so shoppers find you on Google, Shopify search, and AI engines.
          </p>
          <div className="flex items-center gap-3.5 flex-wrap mb-[22px]">
            <Button href={SHOPIFY_URL} size="lg">
              Install free
              <ArrowRightIcon />
            </Button>
            <Button href="#features" variant="ghost" size="lg" external={false}>
              See how it works
            </Button>
          </div>
          <div className="flex items-center gap-[18px] flex-wrap text-muted text-[13.5px]">
            {notes.map((note) => (
              <span key={note} className="inline-flex items-center gap-1.5">
                <CheckIcon className="w-[15px] h-[15px] text-green" />
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0">
          <div
            className="absolute -inset-x-5 -inset-y-[30px] -z-10 rounded-[40px] opacity-[0.14] blur-[60px]"
            style={{ background: "linear-gradient(100deg, var(--blue) 0%, var(--green) 100%)" }}
          />

          <div className="relative z-20 bg-white border border-line rounded-[18px] shadow-card-lg px-[22px] pt-[22px] pb-6">
            <div className="float-card absolute bottom-full -mb-4 -right-3.5 md:-right-3.5 right-0 z-30 bg-white border border-line rounded-[14px] shadow-card-md px-3.5 py-3 flex flex-col items-start gap-[9px] text-[13px] font-medium">
              <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted mb-0.5">
                Discovered on
              </div>
              {["ChatGPT", "Gemini", "Perplexity"].map((engine) => (
                <div key={engine} className="flex items-center gap-2.5 text-[12.5px] text-ink-2">
                  <CheckIcon className="w-4 h-4 text-green" /> {engine}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5 border border-line rounded-full px-3.5 py-2.5 mb-5 text-muted text-[13.5px] bg-bg-soft">
              <SearchIcon className="w-4 h-4 text-blue" />
              leather weekender bag
              <span className="ml-auto font-display font-semibold text-xs text-white bg-gradient-to-r from-blue to-green px-2.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <span className="spark w-1.5 h-1.5 rounded-full bg-white" /> AI writing…
              </span>
            </div>
            <div className="font-mono text-[13px] text-green-deep mb-1">
              yourstore.com › products › weekender
            </div>
            <div className="serp-title font-display font-semibold text-xl text-[#1a5fb4] leading-[1.25] mb-2">
              Handcrafted Full-Grain Leather Weekender Bag — Unisex Travel Duffel
            </div>
            <div className="serp-desc text-[14.5px] text-ink-2 leading-[1.5]">
              Durable full-grain leather weekender with a padded shoulder strap, shoe compartment, and
              water-resistant lining. Ships free — handmade for weekend trips and carry-on travel.
            </div>
            <div className="serp-tags flex gap-2 flex-wrap mt-4">
              <span className="font-mono text-[11.5px] text-blue-deep bg-bg-soft border border-[#DCEAF6] rounded-[7px] px-2.5 py-1">
                leather weekender bag
              </span>
              <span className="font-mono text-[11.5px] text-blue-deep bg-bg-soft border border-[#DCEAF6] rounded-[7px] px-2.5 py-1">
                travel duffel
              </span>
              <span className="font-mono text-[11.5px] text-green-deep bg-bg-mint border border-[#CFEEDA] rounded-[7px] px-2.5 py-1">
                meta description ✓
              </span>
              <span className="font-mono text-[11.5px] text-green-deep bg-bg-mint border border-[#CFEEDA] rounded-[7px] px-2.5 py-1">
                alt text ✓
              </span>
            </div>
          </div>

          <div className="float-card delay absolute -bottom-[30px] -left-[22px] left-0 md:-left-[22px] z-30 bg-white border border-line rounded-[14px] shadow-card-md px-3.5 py-3 flex items-center gap-2.5 text-[13px] font-medium">
            <span
              className="w-[26px] h-[26px] rounded-lg grid place-items-center text-white font-bold text-xs font-display"
              style={{ background: "linear-gradient(100deg, var(--blue) 0%, var(--green) 100%)" }}
            >
              <ImageIcon className="w-4 h-4" />
            </span>
            <div className="leading-[1.25]">
              AI product image
              <br />
              <span className="text-[11.5px] text-muted font-normal">generated · 1 credit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
