import { ReactNode } from "react";

/*
 * Scroll-triggered entrances were removed: content shows immediately.
 * The home hero keeps the one entrance on load (see pages/Home.tsx).
 * These wrappers stay so pages keep their structure.
 */

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  animateOnMount?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
