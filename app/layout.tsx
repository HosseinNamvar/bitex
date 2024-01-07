import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const Outfit = localFont({ src: "../public/fonts/Outfit-VariableFont.ttf" });

export const metadata: Metadata = {
  title: "BITEX",
  description: "Electronic Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Outfit.className}>{children}</body>
    </html>
  );
}
