"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/dogs", label: "Dogs" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className={`container flex h-16 items-center transition-all duration-300 ${
        isScrolled ? "justify-between py-2" : "justify-between py-4"
      }`}>
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className={`transition-all duration-300 ${isScrolled ? "ml-0" : "ml-0"}`}
        >
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.img
              whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              src="/images/karma-logo.png"
              alt="Karma Animal Foundation"
              className={`transition-all duration-300 ${isScrolled ? "h-8 w-auto" : "h-12 w-auto"}`}
            />
            <span className={`font-bold text-teal-700 group-hover:text-teal-600 transition-colors duration-200 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}>
              Karma <span className="text-teal-500 group-hover:text-teal-400 transition-colors duration-200">Animal Foundation</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-teal-600 relative ${
                  pathname === link.href
                    ? "text-teal-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
                {pathname === link.href && link.href !== "/" && ( /* Don't show underline for home */
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col mt-10 space-y-6">
              <AnimatePresence>
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-teal-600 ${
                        pathname === link.href
                          ? "text-teal-600 font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
