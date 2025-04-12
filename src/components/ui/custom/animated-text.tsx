"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  type?: "chars" | "words";
  staggerChildren?: number;
  delayChildren?: number;
  threshold?: number;
  delay?: number;
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  type = "words",
  staggerChildren = 0.05,
  delayChildren = 0,
  threshold = 0.1,
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold, // 'amount' is the correct property instead of 'threshold'
  });
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (type === "words") {
      setWords(text.split(" "));
    } else {
      setWords(Array.from(text));
    }
  }, [text, type]);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren * i + delay,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: type === "words" ? "inline-block" : "inline" }}
          key={`${text}-${index}`}
          className={type === "words" ? "mr-1" : ""}
        >
          {word}
          {type === "words" && index !== words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
}
