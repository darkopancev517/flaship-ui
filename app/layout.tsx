import "@/styles/globals.css";

import * as React from "react";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";

import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: "../assets/fonts/Figtree-Regular.ttf",
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/Figtree-SemiBold.ttf",
  variable: "--font-heading",
});

const fontHero = localFont({
  src: "../assets/fonts/Figtree-SemiBold.ttf",
  variable: "--font-hero",
});

export const metadata: Metadata = {
  title: "Flaship-UI",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontHero.variable,
          fontHeading.variable,
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
