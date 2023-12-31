import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My NextJs App Tolol",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"
      />
    </html>
  );
}
