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
  metadataBase: new URL("https://miura-dashboard.pages.dev/"),
  title: {
    default: "T.Miura's Dashboard",
    template: "%s | T.Miura's Dashboard",
  },
  description: "T.Miura's Dashboard",
  openGraph: {
    type: "website",
    url: "https://miura-dashboard.pages.dev/",
    siteName: "T.Miura's Dashboard",
    // 画像は opengraph-image.png が自動で使われるため省略可
  },
  twitter: {
    card: "summary_large_image",
    site: "@gs223gs_",
    creator: "@gs223gs_",
    // 画像は twitter-image.png があればそれ、無ければOGが流用
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
