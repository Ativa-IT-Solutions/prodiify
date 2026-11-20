"use client";

import { useState } from "react";
import { CheckIcon } from "../ui/Icons";

type Block = {
  num: string;
  label: string;
  blurb: string;
};

const blocks: Block[] = [
  {
    num: "01",
    label: "Image + Text",
    blurb: "Pair a product shot with the story behind it. The simplest way to turn a plain page into a rich one.",
  },
  {
    num: "02",
    label: "Gallery",
    blurb: "Show a product from every angle in one clean grid that adapts to the screen.",
  },
  {
    num: "03",
    label: "Feature List",
    blurb: "List what matters, such as materials, lining and compartments, so shoppers can scan it fast.",
  },
  {
    num: "04",
    label: "Banner / Hero",
    blurb: "Open the page with a bold headline and a clear call to action.",
  },
  {
    num: "05",
    label: "Video",
    blurb: "Add a product video right inside the page, with no theme code.",
  },
  {
    num: "06",
    label: "Carousel",
    blurb: "Let shoppers swipe through related products or variations without leaving the page.",
  },
];

function BlockPreview({ id }: { id: string }) {
  switch (id) {
    case "01":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#eaf3fb] to-[#ebf8f0] grid place-items-center">
            <span className="font-mono text-[11px] text-muted">Product shot</span>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="h-3 w-3/4 rounded bg-line" />
            <div className="h-2.5 w-full rounded bg-line-2" />
            <div className="h-2.5 w-11/12 rounded bg-line-2" />
            <div className="h-2.5 w-2/3 rounded bg-line-2" />
          </div>
        </div>
      );
    case "02":
      return (
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gradient-to-br from-[#eaf3fb] to-[#ebf8f0]"
            />
          ))}
        </div>
      );
    case "03":
      return (
        <ul className="flex flex-col gap-3">
          {["Padded shoulder strap", "Shoe compartment", "Water-resistant lining", "Full-grain leather"].map(
            (f) => (
              <li key={f} className="flex items-center gap-3 text-[14.5px] text-ink">
                <span className="flex-none w-[22px] h-[22px] rounded-full bg-bg-mint grid place-items-center">
                  <CheckIcon className="w-[13px] h-[13px] text-green-deep" />
                </span>
                {f}
              </li>
            )
          )}
        </ul>
      );
    case "04":
      return (
        <div className="relative aspect-[16/8] rounded-xl overflow-hidden grid place-items-center text-center text-white bg-gradient-to-r from-blue to-green">
          <div>
            <div className="font-display font-bold text-xl">Built for the weekend.</div>
            <span className="inline-block mt-3 px-4 py-2 rounded-full bg-white text-ink text-[13px] font-display font-semibold">
              Shop the weekender
            </span>
          </div>
        </div>
      );
    case "05":
      return (
        <div className="relative aspect-[16/9] rounded-xl bg-ink grid place-items-center">
          <span className="w-14 h-14 rounded-full bg-white/95 grid place-items-center shadow-card-md">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-ink translate-x-0.5" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      );
    case "06":
    default:
      return (
        <div className="flex gap-3 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex-none w-1/2 sm:w-2/5 aspect-[3/4] rounded-xl bg-gradient-to-br from-[#eaf3fb] to-[#ebf8f0]"
            />
          ))}
          <div className="flex-none w-10 aspect-[3/4] rounded-xl bg-line-2/60" />
        </div>
      );
  }
}

export function AplusBlocks() {
  const [active, setActive] = useState("01");
  const current = blocks.find((b) => b.num === active) ?? blocks[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-10 items-start">
      <div className="flex flex-col gap-2.5">
        {blocks.map((block) => {
          const selected = block.num === active;
          return (
            <button
              key={block.num}
              type="button"
              onClick={() => setActive(block.num)}
              aria-pressed={selected}
              className={`group flex items-center gap-3.5 text-left rounded-[14px] border px-4 py-3.5 transition-all duration-200 ${
                selected
                  ? "border-blue/40 bg-bg-soft shadow-card-sm"
                  : "border-line bg-white hover:border-[#CFDCE8]"
              }`}
            >
              <span
                className={`flex-none w-[34px] h-[34px] rounded-[10px] grid place-items-center font-mono font-bold text-[13px] ${
                  selected
                    ? "text-white bg-gradient-to-r from-blue to-green"
                    : "text-muted bg-bg-soft group-hover:text-ink-2"
                }`}
              >
                {block.num}
              </span>
              <span className="font-display font-semibold text-[15px] text-ink">{block.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-line rounded-2xl shadow-card-lg overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line-2 bg-bg-soft">
          <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5A9A0]" />
          <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#F5D48A]" />
          <i className="w-[11px] h-[11px] rounded-full inline-block bg-[#A9DDB0]" />
          <span className="ml-3 font-mono text-[11.5px] text-muted">Preview: {current.label}</span>
        </div>
        <div className="p-6 md:p-8">
          <p className="text-[15px] text-ink-2 mb-6">{current.blurb}</p>
          <div className="rounded-2xl border border-line-2 bg-white p-4 md:p-6">
            <BlockPreview id={current.num} />
          </div>
          <div className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase text-blue-deep">
            <span className="w-[18px] h-[1.5px] rounded bg-gradient-to-r from-blue to-green" />
            Responsive on every device
          </div>
        </div>
      </div>
    </div>
  );
}
