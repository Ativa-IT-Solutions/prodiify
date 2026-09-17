import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-[640px] mb-12 ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="font-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] tracking-[-0.02em] my-4">
        {title}
      </h2>
      <p className="text-[17px] text-ink-2">{description}</p>
    </div>
  );
}
