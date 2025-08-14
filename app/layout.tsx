import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import { JotaiProvider } from "@/providers/JotaiProvider";
import { MainContent } from "@/components/layout/MainContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miura-dashboard.pages.dev"),
  title: {
    default: "T.Miura's Dashboard",
    template: "%s | T.Miura's Dashboard",
  },
  description: "志は身長より高く - T.Miuraのポートフォリオサイト",
  openGraph: {
    type: "website",
    url: "https://miura-dashboard.pages.dev",
    title: "T.Miura's Dashboard",
    description: "志は身長より高く - T.Miuraのポートフォリオサイト",
    siteName: "T.Miura's Dashboard",
    images: [
      {
        url: "https://miura-dashboard.pages.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "T.Miura's Dashboard",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gs223gs_",
    creator: "@gs223gs_",
    title: "T.Miura's Dashboard",
    description: "志は身長より高く - T.Miuraのポートフォリオサイト",
    images: ["https://miura-dashboard.pages.dev/twitter-image.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JotaiProvider>
          <Sidebar />
          <MainContent>
            {children}
          </MainContent>
        </JotaiProvider>
      </body>
    </html>
  );
}
