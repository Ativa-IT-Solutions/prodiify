export function Eyebrow({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.14em] uppercase text-blue-deep inline-flex items-center gap-2 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-[22px] h-[1.5px] rounded bg-gradient-to-r from-blue to-green" />
      {children}
    </span>
  );
}
