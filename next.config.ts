import type { NextConfig } from "next";

const wordpressHostname = (() => {
  try {
    return process.env.WORDPRESS_API_URL ? new URL(process.env.WORDPRESS_API_URL).hostname : null;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      ...(wordpressHostname
        ? [
            {
              protocol: "https" as const,
              hostname: wordpressHostname,
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;
