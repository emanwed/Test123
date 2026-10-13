import Link from "next/link";

/**
 * DaleelStore wordmark. The mark is a rounded geometric "د" (dal) inspired by the
 * official brand mark on the team banner. Replace the <svg> with the official SVG
 * from the brand kit when available.
 */
export function LogoMark({ className = "h-8 w-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M20 8c6.5 0 12 4.5 14.5 10.5L46 44c1.5 3.6-1.1 7.5-5 7.5H14c-3.3 0-6-2.7-6-6s2.7-6 6-6h18.2L22.6 21.3C21.8 19.6 20.3 19 19 19c-2.9 0-5.5-2.3-5.5-5.5S16 8 20 8Z"
        fill={color}
      />
      <circle cx="50" cy="16" r="5" fill={color} />
    </svg>
  );
}

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const color = dark ? "#ffffff" : "#090f30";
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="DaleelStore home">
      <LogoMark className="h-9 w-9" color={color} />
      <span className="leading-none" style={{ color }}>
        <span className="block font-arabic text-[11px] font-semibold tracking-wide opacity-80" dir="rtl">
          دليل ستور
        </span>
        <span className="block text-[19px] tracking-tight">
          <span className="font-extrabold">Daleel</span>
          <span className="font-medium">Store</span>
        </span>
      </span>
    </Link>
  );
}
