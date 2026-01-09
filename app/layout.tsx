import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Navbar } from "@/components/navigation/Navbar";
import { EffectsProvider } from "@/components/providers/effects-provider";
import PageLoader from "@/components/providers/page-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rasidin Hatta",
  description: "Rasidin Hatta's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <EffectsProvider>
            <PageLoader />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 w-full relative z-10">{children}</main>
            </div>
          </EffectsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
