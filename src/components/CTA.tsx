import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function CTA({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const classes =
    variant === "primary"
      ? "bg-charcoal text-cream hover:bg-ember"
      : "border border-charcoal/20 bg-cream/80 text-charcoal hover:border-ember hover:text-ember";

  return (
    <Link className={`focus-ring inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${classes}`} href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
