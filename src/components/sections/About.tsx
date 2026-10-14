import { Eyebrow } from "../ui/Eyebrow";

const ATIVA_URL = "https://apps.shopify.com/partners/ativa-it-solutions-and-business-consulti";

const points = [
  {
    title: "Shopify Partner",
    body: "Built on the platform we know best, following Shopify's app standards and review process.",
  },
  {
    title: "Merchant-first",
    body: "Every feature starts from a real store problem: thin listings, slow content, missed search traffic.",
  },
  {
    title: "Here for the long run",
    body: "Backed by a team that ships, supports, and keeps improving Prodiify release after release.",
  },
];

export function About() {
  return (
    <section className="py-24" id="about">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow>The team behind it</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] tracking-[-0.02em] my-4">
              Prodiify <span className="text-muted font-medium">by</span> Ativa
            </h2>
            <p className="text-[17px] text-ink-2 mb-4">
              Prodiify is built by <strong className="text-ink font-semibold">Ativa IT Solutions</strong>,
              a Shopify Partner that helps merchants grow with practical, well-made software.
            </p>
            <p className="text-[15.5px] text-ink-2 mb-7">
              We built Prodiify because great products deserve to be found. It brings the same AI-driven
              SEO workflow our team uses for clients to every Shopify store, no agency retainer required.
            </p>
            <a
              href={ATIVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-blue-deep hover:gap-2.5 transition-all"
            >
              Meet Ativa on the Shopify App Store
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid gap-3.5">
            {points.map((point) => (
              <div key={point.title} className="bg-white border border-line rounded-[18px] p-6">
                <h3 className="font-display font-semibold text-[17px] mb-1.5">{point.title}</h3>
                <p className="text-[14.5px] text-ink-2">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
