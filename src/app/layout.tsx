import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AmakaFlow — The Fitness App That Actually Understands Your Training",
  description:
    "Import workouts from Instagram, YouTube, TikTok. AI coaching. Smart recovery. Push to Garmin & Apple Watch. Join the beta.",
  openGraph: {
    title: "AmakaFlow — The Fitness App That Actually Understands Your Training",
    description:
      "Import workouts from Instagram, YouTube, TikTok. AI coaching. Smart recovery. Push to Garmin & Apple Watch. Join the beta.",
    type: "website",
    url: "https://amakaflow.com",
    siteName: "AmakaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "AmakaFlow — The Fitness App That Actually Understands Your Training",
    description:
      "Import workouts from Instagram, YouTube, TikTok. AI coaching. Smart recovery. Push to Garmin & Apple Watch. Join the beta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0D0D0F] text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
