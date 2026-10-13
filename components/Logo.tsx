import Link from "next/link";
import { MARK_PATH, DALEEL_PATH, ARABIC_PATH } from "@/lib/logo";

/**
 * Official Daleel logo, vectorised from the brand file (black/gray corporate colourway).
 * Mark: 244x214 · "Daleel": 293x64 · Arabic "دليل": 161x73.
 */
export function LogoMark({ className = "h-8 w-auto", color }: { className?: string; color?: string }) {
  const id = "daleel-mark-grad";
  return (
    <svg viewBox="0 0 244 214" className={className} aria-hidden="true">
      {!color && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0b0b0f" />
            <stop offset="1" stopColor="#3a3a44" />
          </linearGradient>
        </defs>
      )}
      <path fill={color ?? `url(#${id})`} fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}

/** Full lockup: Arabic over "Daleel", mark to the right. viewBox 520 x 160. */
export function LogoLockup({ dark = false, className = "h-9 w-auto" }: { dark?: boolean; className?: string }) {
  const text = dark ? "#ffffff" : "#0b0b0f";
  const arabic = dark ? "rgba(255,255,255,0.7)" : "#6b6f7b";
  const id = dark ? "daleel-lockup-white" : "daleel-lockup-grad";
  return (
    <svg viewBox="0 0 520 160" className={className} role="img" aria-label="Daleel">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={dark ? "#ffffff" : "#0b0b0f"} />
          <stop offset="1" stopColor={dark ? "#ffffff" : "#3a3a44"} />
        </linearGradient>
      </defs>
      <g transform="translate(132 0)"><path fill={arabic} fillRule="evenodd" d={ARABIC_PATH} /></g>
      <g transform="translate(0 87)"><path fill={text} fillRule="evenodd" d={DALEEL_PATH} /></g>
      <g transform="translate(337 0) scale(0.7477)"><path fill={`url(#${id})`} fillRule="evenodd" d={MARK_PATH} /></g>
    </svg>
  );
}

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Daleel home">
      <LogoLockup dark={dark} className="h-10 w-auto" />
    </Link>
  );
}
