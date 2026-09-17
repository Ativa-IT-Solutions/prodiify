import { Button } from "../ui/Button";
import { ArrowRightIcon } from "../ui/Icons";

const SHOPIFY_URL = "https://apps.shopify.com/prodiify";

export function CtaBand() {
  return (
    <section className="pb-24">
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[26px] px-6 md:px-10 py-14 md:py-[60px] text-center text-white shadow-card-lg"
          style={{ background: "linear-gradient(100deg, var(--blue) 0%, var(--green) 100%)" }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(60% 120% at 50% -10%, rgba(255,255,255,0.22), transparent 60%)" }}
          />
          <h2 className="relative font-display font-bold text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.1] tracking-[-0.02em] mb-3.5">
            Turn thin listings into traffic.
          </h2>
          <p className="relative text-[17px] opacity-90 max-w-[46ch] mx-auto mb-7">
            Install Prodiify free and give your first products SEO-ready content in the next five minutes.
          </p>
          <Button href={SHOPIFY_URL} variant="white" size="lg" className="relative">
            Add Prodiify to Shopify
            <ArrowRightIcon />
          </Button>
          <div className="relative mt-4 text-[13.5px] opacity-85">
            Free plan available · No developer needed · Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
