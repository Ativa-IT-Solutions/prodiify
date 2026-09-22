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

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/prodiify/about/",
    label: "Prodiify on LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z",
  },
  {
    href: "https://www.instagram.com/prodiifyai/",
    label: "Prodiify on Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
  {
    href: "https://www.facebook.com/people/Prodiify/61594054410955",
    label: "Prodiify on Facebook",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
  },
  {
    href: "https://youtube.com/@prodiify",
    label: "Prodiify on YouTube",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z",
  },
  {
    href: "https://www.pinterest.com/prodiify",
    label: "Prodiify on Pinterest",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.16-.11-.95-.2-2.4.04-3.44.22-.94 1.42-5.98 1.42-5.98s-.36-.73-.36-1.8c0-1.68.98-2.94 2.19-2.94 1.03 0 1.53.77 1.53 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.51 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.56-5.43 5.22 0 1.03.4 2.14.89 2.74a.36.36 0 0 1 .08.34c-.09.38-.3 1.2-.34 1.37-.05.22-.18.27-.41.16-1.52-.71-2.47-2.93-2.47-4.71 0-3.84 2.79-7.36 8.04-7.36 4.22 0 7.5 3.01 7.5 7.02 0 4.19-2.64 7.56-6.31 7.56-1.23 0-2.39-.64-2.78-1.4l-.76 2.87c-.27 1.05-1 2.37-1.5 3.17A12 12 0 1 0 12 0z",
  },
  {
    href: "https://medium.com/@prodiify",
    label: "Prodiify on Medium",
    path: "M13.54 12a6.72 6.72 0 0 1-6.72 6.72A6.72 6.72 0 0 1 .1 12a6.72 6.72 0 0 1 6.72-6.72A6.72 6.72 0 0 1 13.54 12zm7.36 0c0 3.54-1.5 6.42-3.36 6.42-1.85 0-3.36-2.88-3.36-6.42s1.5-6.42 3.36-6.42c1.85 0 3.36 2.87 3.36 6.42zm2.7 0c0 3.17-.53 5.75-1.19 5.75-.65 0-1.18-2.57-1.18-5.75 0-3.17.53-5.75 1.18-5.75.66 0 1.19 2.57 1.19 5.75z",
  },
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
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full grid place-items-center bg-white text-ink-2 border border-line-2 hover:text-blue-deep hover:border-blue-deep transition-colors"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
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
