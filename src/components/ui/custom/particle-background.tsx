"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  particleType?: "pawprint" | "circle" | "heart";
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

export function ParticleBackground({
  className = "",
  particleCount = 15,
  particleColor = "rgba(16, 185, 129, 0.5)", // teal-600 with opacity
  particleType = "pawprint",
  minSize = 15,
  maxSize = 40,
  speed = 1
}: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store the current container reference to avoid issues in cleanup
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const particles = Array.from({ length: particleCount });

    // Clear any existing particles
    container.innerHTML = "";

    // Create a style tag for animations
    const styleTag = document.createElement("style");
    styleTag.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(${Math.random() * 360}deg);
          opacity: 0;
        }
        25% {
          opacity: 0.5;
        }
        50% {
          transform: translateY(-40px) rotate(${Math.random() * 360}deg);
          opacity: 0.8;
        }
        75% {
          opacity: 0.5;
        }
      }
    `;
    document.head.appendChild(styleTag);

    // Use for...of instead of forEach for better performance
    for (const _ of particles) {
      // Create particle
      const particle = document.createElement("div");

      // Random size between min and max
      const size = Math.random() * (maxSize - minSize) + minSize;

      // Random position
      const xPos = Math.random() * (containerRect.width - size);
      const yPos = Math.random() * (containerRect.height - size);

      // Random rotation
      const rotation = Math.random() * 360;

      // Random animation duration (affected by speed parameter)
      const duration = (Math.random() * 20 + 10) / speed;

      // Random delay
      const delay = Math.random() * 5;

      // Set particle styles
      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${xPos}px`;
      particle.style.top = `${yPos}px`;
      particle.style.opacity = "0";
      particle.style.transform = `rotate(${rotation}deg)`;
      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;

      // Set content based on particle type
      if (particleType === "pawprint") {
        particle.innerHTML = `
          <svg viewBox="0 0 512 512" fill="${particleColor}" xmlns="http://www.w3.org/2000/svg">
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8S212.2 50 226.5 92.9zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7.9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          </svg>
        `;
      } else if (particleType === "heart") {
        particle.innerHTML = `
          <svg viewBox="0 0 512 512" fill="${particleColor}" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
          </svg>
        `;
      } else {
        // Default to circle
        particle.style.backgroundColor = particleColor;
        particle.style.borderRadius = "50%";
      }

      container.appendChild(particle);
    }

    // Proper cleanup function with captured reference
    return () => {
      if (styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }

      if (container) {
        container.innerHTML = "";
      }
    };
  }, [particleCount, particleColor, particleType, minSize, maxSize, speed]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
