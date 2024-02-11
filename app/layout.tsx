import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Script from "next/script";

const outfitFont = localFont({
  src: "../public/fonts/Outfit-VariableFont.ttf",
  fallback: ["sans-serif", "system-ui", "arial"],
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G46GQ4JY5Q"
        />
        <Script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-G46GQ4JY5Q');
            
          `}
        </Script>
      </head>
      <body className={outfitFont.className}>{children}</body>
    </html>
  );
}
