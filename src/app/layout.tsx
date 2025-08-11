import type { Metadata } from "next";
import "./globals.css";
import { Neucha, Caveat } from "next/font/google";

const neucha = Neucha({
  variable: "--font-neucha",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Element Widget",
    template: "%s | Element Widget",
  },
  description: "Interactive element selection widget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${neucha.variable} ${caveat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
