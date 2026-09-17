import { SectionHead } from "../ui/SectionHead";

const steps = [
  {
    num: "01",
    title: "Connect your store",
    body: "Install Prodiify from the Shopify App Store. It syncs with your product catalog instantly — no theme edits.",
  },
  {
    num: "02",
    title: "Generate content",
    body: "Let AI write SEO titles, descriptions, tags, and images. Do one product or bulk-optimize the whole catalog.",
  },
  {
    num: "03",
    title: "Publish & rank",
    body: "Push polished listings live in seconds and start getting discovered on Google, Shopify, and AI search.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-bg-soft" id="how">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Three steps"
          title="From connected to ranking in minutes."
          description="No onboarding calls, no setup checklist. Install, generate, publish."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {steps.map((step, i) => (
            <div key={step.num} className="relative bg-white border border-line rounded-[18px] p-7">
              <div className="w-[34px] h-[34px] rounded-[10px] grid place-items-center mb-[18px] text-white font-mono font-bold text-[13px] bg-gradient-to-r from-blue to-green">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-11 -right-[13px] w-[26px] h-0.5 bg-line z-10" />
              )}
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-[14.5px] text-ink-2">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
