import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnel_display = Funnel_Display({
  weight: "400",
  variable: "--font-funnel-display",
  subsets: ["latin"]
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
      <body className={`${funnel_display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
