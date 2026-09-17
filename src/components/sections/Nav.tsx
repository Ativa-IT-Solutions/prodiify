"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "../ui/Icons";

const SHOPIFY_URL = "https://apps.shopify.com/prodiify";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#discovery", label: "AI search" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/82 backdrop-blur-md backdrop-saturate-150 border-b border-line-2">
      <div className="wrap flex items-center justify-between h-[70px]">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-[21px] tracking-[-0.01em]">
          <span className="w-[38px] h-[38px] rounded-[10px] bg-white grid place-items-center overflow-hidden p-[7px] shadow-[0_4px_12px_rgba(46,111,176,0.18)]">
            <Image src="/logo.webp" alt="Prodiify" width={34} height={42} className="w-full h-full object-contain" priority />
          </span>
          Prodiify
        </a>
        <nav className="hidden lg:flex items-center gap-[30px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-ink-2 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3.5">
          <div className="hidden lg:block">
            <Button href={SHOPIFY_URL} variant="primary">
              Add to Shopify
              <ArrowRightIcon />
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-line text-ink hover:bg-bg-soft transition-colors"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 border-t border-line-2 bg-white shadow-card-lg">
          <nav className="wrap flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-ink-2 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href={SHOPIFY_URL} variant="primary" className="mt-3 justify-center">
              Add to Shopify
              <ArrowRightIcon />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
