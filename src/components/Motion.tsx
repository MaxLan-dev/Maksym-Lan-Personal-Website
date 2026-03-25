import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, className, delay = 0, direction = "left" }: Props & { direction?: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  /** Use on long lists or mobile / in-app browsers where scroll-based animation may never run. */
  animateOnMount = false,
}: {
  children: ReactNode;
  className?: string;
  animateOnMount?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      {...(animateOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-30px" } })}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
