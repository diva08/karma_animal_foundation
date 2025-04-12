"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type FxType = "parallax" | "zoom" | "rotate" | "fade" | "slide-up" | "slide-in-left" | "slide-in-right";

interface ScrollFxProps {
  children: ReactNode;
  type: FxType;
  className?: string;
  strength?: number;
  startOffset?: number;
  endOffset?: number;
}

export function ScrollFx({
  children,
  type,
  className = "",
  strength = 0.2,
  startOffset = 0.1,
  endOffset = 0.8
}: ScrollFxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset * 100}%`, `end ${endOffset * 100}%`]
  });

  // Create all the transform values outside of conditionals to follow React hooks rules
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100 * strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + 0.2 * strength, 1 + 0.1 * strength]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10 * strength]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.8]);
  const ySlideUp = useTransform(scrollYProgress, [0, 0.7], [50 * strength, 0]);
  const xSlideInLeft = useTransform(scrollYProgress, [0, 0.7], [-100 * strength, 0]);
  const xSlideInRight = useTransform(scrollYProgress, [0, 0.7], [100 * strength, 0]);

  // Determine which transforms to apply based on the effect type
  const getMotionProps = () => {
    switch (type) {
      case "parallax":
        return { y: yParallax };
      case "zoom":
        return { scale };
      case "rotate":
        return { rotate };
      case "fade":
        return { opacity };
      case "slide-up":
        return { y: ySlideUp };
      case "slide-in-left":
        return { x: xSlideInLeft };
      case "slide-in-right":
        return { x: xSlideInRight };
      default:
        return {};
    }
  };

  const motionProps = getMotionProps();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={motionProps}
    >
      {children}
    </motion.div>
  );
}
