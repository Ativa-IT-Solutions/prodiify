import Image from "next/image";

const engines = [
  { label: "Google", logo: "/google.svg" },
  { label: "Shopify search", logo: "/shopify.svg" },
  { label: "ChatGPT", logo: "/openai.svg" },
  { label: "Gemini", logo: "/googlegemini.svg" },
  { label: "Perplexity", logo: "/perplexity.svg" },
];

export function DiscoveryStrip() {
  return (
    <div className="border-y border-line-2 bg-bg-soft py-[26px]" id="discovery">
      <div className="wrap flex items-center gap-7 flex-wrap justify-center">
        <span className="font-mono text-xs tracking-[0.08em] uppercase text-muted">Get found across</span>
        {engines.map((engine) => (
          <span key={engine.label} className="inline-flex items-center gap-2.5 font-display font-semibold text-base text-ink-2">
            <span className="w-[26px] h-[26px] rounded-[7px] grid place-items-center bg-white border border-line-2">
              <Image src={engine.logo} alt={`${engine.label} logo`} width={15} height={15} className="w-[15px] h-[15px]" />
            </span>
            {engine.label}
          </span>
        ))}
      </div>
    </div>
  );
}
