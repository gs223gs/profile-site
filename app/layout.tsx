import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import { JotaiProvider } from "@/providers/JotaiProvider";
import { MainContent } from "@/components/layout/MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T.Miura's Dashboard",
  description: "T.Miura's Dashboard",
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
          <SidebarProvider defaultOpen={false}>
            <div className="flex w-full">
              <AppSidebar />
              <MainContent>
                {children}
              </MainContent>
            </div>
          </SidebarProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
