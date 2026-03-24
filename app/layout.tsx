import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const funnelDisplay = localFont({
  src: [
    {
      path: "../public/FunnelDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-funnel-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Join the Fempay Waitlist",
  description:
    "Get early access to Fempay: secure student financing built for students and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
