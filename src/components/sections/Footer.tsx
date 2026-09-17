import Image from "next/image";

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#discovery", label: "AI search" },
  { href: "/blog", label: "Blog" },
];

const getStartedLinks = [
  { href: "https://apps.shopify.com/prodiify", label: "Shopify App Store" },
  { href: "https://apps.shopify.com/prodiify", label: "Install free" },
  { href: "/privacy", label: "Privacy policy" },
];

const companyLinks = [
  {
    href: "https://apps.shopify.com/partners/ativa-it-solutions-and-business-consulti",
    label: "ATIVA IT Solutions",
  },
  { href: "https://apps.shopify.com/prodiify", label: "Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-line-2 pt-[52px] pb-[34px]">
      <div className="wrap">
        <div className="flex justify-between gap-10 flex-wrap mb-[38px]">
          <div className="max-w-[300px]">
            <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-[21px] tracking-[-0.01em]">
              <span className="w-[38px] h-[38px] rounded-[10px] bg-white grid place-items-center overflow-hidden p-[7px] shadow-[0_4px_12px_rgba(46,111,176,0.18)]">
                <Image src="/logo.webp" alt="Prodiify" width={34} height={42} className="w-full h-full object-contain" />
              </span>
              Prodiify
            </a>
            <p className="text-sm text-muted mt-3.5">
              AI-generated SEO titles, descriptions, tags, and images for Shopify — so your products get discovered
              on Google, Shopify, and AI search.
            </p>
          </div>
          <div className="flex gap-16 flex-wrap">
            <FooterCol title="Product" links={productLinks} />
            <FooterCol title="Get started" links={getStartedLinks} />
            <FooterCol title="Company" links={companyLinks} />
          </div>
        </div>
        <div className="flex justify-between gap-5 flex-wrap items-center pt-6 border-t border-line-2 text-[13px] text-muted">
          <span>© 2026 Prodiify by ATIVA IT Solutions &amp; Business Consulting. All rights reserved.</span>
          <span>Built for the Shopify App Store</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  const isExternal = (href: string) => href.startsWith("http");
  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted mb-3.5">{title}</h4>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={isExternal(link.href) ? "_blank" : undefined}
          rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
          className="block text-[14.5px] text-ink-2 mb-2.5 hover:text-blue-deep transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
