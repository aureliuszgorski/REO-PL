import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GearCounterProps {
  target: number;
  decimals?: number;
}

export default function GearCounter({ target, decimals = 0 }: GearCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Simple animation: increase to target with random jitter
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      const current = target * eased + (Math.random() - 0.5) * target * 0.02;
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target]);

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Simple gear shape */}
      <svg viewBox="0 0 100 100" className="w-full h-full text-[#A9E8CB]" fill="none" stroke="currentColor" strokeWidth="5">
        <circle cx="50" cy="50" r="30" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="48"
            y="5"
            width="4"
            height="15"
            transform={`rotate(${i * 45} 50 50}`}
          />
        ))}
      </svg>
      <motion.div
        className="absolute text-[#201B55] font-bold text-xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {value.toFixed(decimals).replace('.', ',')}
      </motion.div>
    </div>
  );
}
