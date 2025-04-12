"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { useState } from "react";

interface AnimateImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  effect?: "zoom" | "tilt" | "float" | "pulse" | "shine" | "shake" | "none";
  priority?: boolean;
  quality?: number;
  radius?: string;
}

export function AnimateImage({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  effect = "zoom",
  priority = false,
  quality = 85,
  radius = "lg",
}: AnimateImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Configure effects
  let hoverStyles = {};
  let initialStyles = {};
  let transition: Transition = { duration: 0.4 };

  const roundedClass = `rounded-${radius}`;

  switch (effect) {
    case "zoom":
      initialStyles = { scale: 1 };
      hoverStyles = { scale: 1.07 };
      transition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      };
      break;

    case "tilt":
      initialStyles = { rotateY: 0, rotateX: 0 };
      hoverStyles = { rotateY: -5, rotateX: 5 };
      break;

    case "float":
      initialStyles = { y: 0 };
      hoverStyles = { y: -10 };
      transition = {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 1.5
      };
      break;

    case "pulse":
      initialStyles = { scale: 1 };
      hoverStyles = { scale: 1.03 };
      transition = {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        duration: 1.2
      };
      break;

    case "shine":
      // Shine effect will be handled with CSS
      break;

    case "shake":
      initialStyles = { x: 0 };
      hoverStyles = { x: [0, -5, 5, -5, 5, 0] };
      transition = { duration: 0.6 };
      break;

    default:
      break;
  }

  const shineClass = effect === "shine" ? "group overflow-hidden" : "";

  return (
    <motion.div
      className={`relative overflow-hidden ${roundedClass} ${shineClass} ${className}`}
      initial={initialStyles}
      animate={isHovered ? hoverStyles : initialStyles}
      transition={transition}
      onHoverStart={() => effect !== "float" && effect !== "pulse" && setIsHovered(true)}
      onHoverEnd={() => effect !== "float" && effect !== "pulse" && setIsHovered(false)}
      whileInView={effect === "float" || effect === "pulse" ? hoverStyles : {}}
    >
      {effect === "shine" && (
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 group-hover:translate-x-full"
          animate={isHovered ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" as const }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        quality={quality}
        className={`object-cover ${roundedClass}`}
      />
    </motion.div>
  );
}
