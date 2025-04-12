"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Dogs", href: "/dogs" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/karma_foundation/", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/karmaanimalfoundation/", icon: Facebook },
    { name: "Email", href: "mailto:info@karmaanimalfoundation.org", icon: Mail },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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

const socialItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

export function Footer() {
  return (
    <motion.footer
      className="bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/karma-logo.png"
                alt="Karma Animal Foundation Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </motion.div>
            <div>
              <motion.h3
                className="text-lg font-bold text-teal-700"
                whileHover={{ color: "#0d9488" }}
                transition={{ duration: 0.2 }}
              >
                Karma Animal Foundation
              </motion.h3>
              <p className="text-sm text-gray-600">Shelter with love, commitment & care</p>
            </div>
          </motion.div>
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <h3 className="text-gray-900 font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-600 mt-2">
              <p>Surya Farms, Bhondsi</p>
              <p>Gurgaon Sohna Road, Next to Country Inn</p>
              <p>Gurugram - Haryana 122001</p>
              <motion.p
                className="mt-2"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="mailto:info@karmaanimalfoundation.org" className="text-teal-600 hover:text-teal-500 animated-underline">
                  info@karmaanimalfoundation.org
                </a>
              </motion.p>
            </address>
          </motion.div>
        </motion.div>

        <motion.nav
          className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
          variants={itemVariants}
        >
          {navigation.main.map((item) => (
            <motion.div
              key={item.name}
              className="pb-6"
              whileHover={{ scale: 1.05, x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-teal-600 animated-underline">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          className="mt-8 flex justify-center space-x-10"
          variants={itemVariants}
        >
          {navigation.social.map((item, index) => (
            <motion.div
              key={item.name}
              variants={socialItemVariants}
              custom={index}
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <Link href={item.href} className="text-gray-400 hover:text-teal-600">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="text-center">
            <p className="text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Karma Animal Foundation. All rights reserved.
            </p>
            <motion.p
              className="text-xs leading-5 text-gray-500 mt-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                id="suppawt"
                className="font-medium text-teal-600"
                animate={{
                  scale: [1, 1.1, 1],
                  color: ["#0d9488", "#14b8a6", "#0d9488"]
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 3
                }}
              >
                #suppawt
              </motion.span> our quest on social media
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
