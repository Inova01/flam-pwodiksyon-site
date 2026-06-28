import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://flampwodiksyon.live"),
  title: "Flam Pwodiksyon",
  description: "Site vitrine officiel de Flam Pwodiksyon.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
