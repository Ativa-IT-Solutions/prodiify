import { Button } from "../ui/Button";
import { SectionHead } from "../ui/SectionHead";
import { CheckIcon } from "../ui/Icons";

const SHOPIFY_URL = "https://apps.shopify.com/prodiify";

const plans = [
  {
    name: "Free",
    price: "$0",
    tag: "Free forever",
    features: ["20 AI text credits / mo", "Up to 50 products", "SEO titles, descriptions & tags"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Starter",
    price: "$9.99",
    suffix: "/ mo",
    tag: "For growing shops",
    features: ["100 AI text credits / mo", "5 image credits / mo", "Up to 500 products"],
    cta: "Choose Starter",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29.99",
    suffix: "/ mo",
    tag: "Best for scaling stores",
    features: ["500 AI text credits / mo", "50 image credits / mo", "Unlimited products"],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "$89.99",
    suffix: "/ mo",
    tag: "High-volume catalogs",
    features: ["2,000 AI text credits / mo", "200 image credits / mo", "Unlimited products"],
    cta: "Choose Business",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-bg-soft" id="pricing">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Pricing"
          title="Start free. Scale when you're ready."
          description="Every plan includes AI content generation. All fees are billed in USD every 30 days."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col bg-white rounded-[18px] px-6 py-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-md ${
                plan.popular
                  ? "border-[1.5px] border-green shadow-[0_20px_44px_rgba(16,179,75,0.14)]"
                  : "border border-line"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10.5px] tracking-[0.06em] uppercase bg-green text-white px-3 py-1.5 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}
              <div className="font-display font-semibold text-[15px] text-blue-deep tracking-[0.02em]">
                {plan.name}
              </div>
              <div className="font-display font-bold text-[34px] tracking-[-0.02em] mt-2.5 mb-0.5 flex items-baseline gap-1">
                {plan.price}
                {plan.suffix && <small className="text-sm font-medium text-muted">{plan.suffix}</small>}
              </div>
              <div className="text-[13.5px] text-muted mb-5">{plan.tag}</div>
              <ul className="flex flex-col gap-[11px] my-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 items-start text-sm text-ink-2">
                    <CheckIcon className="flex-none w-[17px] h-[17px] text-green mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={SHOPIFY_URL}
                variant={plan.popular ? "primary" : "ghost"}
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
