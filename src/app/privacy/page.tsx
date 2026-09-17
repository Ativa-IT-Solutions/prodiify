import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Prodiify",
  description:
    "How Prodiify, operated by Ativa IT Solutions and Business Consulting, collects, uses, and protects your data.",
};

const sections = [
  {
    title: "1. Introduction",
    body: (
      <p>
        Prodiify (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is operated by Ativa IT Solutions and
        Business Consulting. This Privacy Policy explains how we collect, use, and protect information when you
        use our Shopify app and web portal at prodiify.ativaitsolutions.com.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <ul>
        <li>Shopify store domain and access token (to manage your products)</li>
        <li>Store owner email and name (from Shopify)</li>
        <li>Product data (titles, descriptions, tags, images) you choose to manage</li>
        <li>AI generation usage (credits used, content generated)</li>
        <li>Billing information (processed securely by Shopify)</li>
      </ul>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <ul>
        <li>To provide and improve Prodiify services</li>
        <li>To generate AI content for your Shopify products</li>
        <li>To manage your subscription and billing</li>
        <li>To send important service updates</li>
        <li>To provide customer support</li>
      </ul>
    ),
  },
  {
    title: "4. Data Storage & Security",
    body: (
      <p>
        Your data is stored securely on MongoDB Atlas (cloud database). Shopify access tokens are encrypted using
        AES-256-GCM encryption. We never store your Shopify admin password or payment card details. All data
        transmission is secured via HTTPS/TLS.
      </p>
    ),
  },
  {
    title: "5. Third-Party Services",
    body: (
      <>
        <p>We use the following third-party services to power Prodiify:</p>
        <ul>
          <li>Shopify API — Product and store management</li>
          <li>OpenAI / Anthropic — AI text generation</li>
          <li>Replicate — AI image generation</li>
          <li>MongoDB Atlas — Secure data storage</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    body: (
      <p>
        We retain your data as long as your account is active. When you uninstall Prodiify, your store access
        token is immediately invalidated. You may request complete data deletion by contacting us at{" "}
        <a href="mailto:info@ativaitsolutions.com">info@ativaitsolutions.com</a>.
      </p>
    ),
  },
  {
    title: "7. Your Rights",
    body: (
      <ul>
        <li>Access your personal data</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw consent at any time by uninstalling the app</li>
      </ul>
    ),
  },
  {
    title: "8. Cookies",
    body: (
      <p>
        Prodiify uses minimal cookies only for authentication purposes (JWT tokens stored in localStorage). We do
        not use tracking or advertising cookies.
      </p>
    ),
  },
  {
    title: "9. Children's Privacy",
    body: (
      <p>
        Prodiify is not intended for use by children under 13 years of age. We do not knowingly collect personal
        information from children.
      </p>
    ),
  },
  {
    title: "10. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any significant changes via
        email or through the app.
      </p>
    ),
  },
  {
    title: "11. Contact Us",
    body: (
      <>
        <p>For any privacy-related questions or requests:</p>
        <p className="mt-3">
          Ativa IT Solutions and Business Consulting
          <br />
          Email: <a href="mailto:info@ativaitsolutions.com">info@ativaitsolutions.com</a>
          <br />
          Website:{" "}
          <a href="https://ativaitsolutions.com" target="_blank" rel="noopener noreferrer">
            ativaitsolutions.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="wrap py-16 max-w-[760px]">
        <h1 className="font-display font-bold text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted text-[14.5px] mb-12">Last updated: September 17, 2026</p>

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display font-semibold text-xl text-ink mb-3">{section.title}</h2>
              <div className="text-[15px] leading-[1.7] text-ink-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5 [&_a]:text-blue-deep [&_a]:hover:underline">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
