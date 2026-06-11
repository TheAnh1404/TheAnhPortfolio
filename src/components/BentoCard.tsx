import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const hasBg = className.split(" ").some(c => c.startsWith("bg-"));
  const bgClass = hasBg ? "" : "bg-surface-container-lowest";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`${bgClass} border border-outline-variant/70 rounded-xl overflow-hidden shadow-sm hover:border-primary/40 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
