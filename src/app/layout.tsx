import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karma Animal Foundation - Shelter with love, commitment & care",
  description: "Established in April 2015, Karma Animal Foundation is a private, non-profit organization in Gurgaon dedicated to rescuing, rehabilitating, and rehoming abandoned and neglected dogs.",
  keywords: ["animal shelter", "dog adoption", "rescued dogs", "animal welfare", "Gurgaon", "Karma Foundation", "pet adoption", "animal rescue"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
