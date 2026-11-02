import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesusblessing Dominion | Flutter & Mobile Application Developer",
  description:
    "Flutter & Mobile Application Developer with 5 years of software engineering experience specializing in architecting and shipping production-grade cross-platform fintech applications.",
  keywords: [
    "Jesusblessing Dominion",
    "Flutter Developer",
    "Mobile Application Developer",
    "iOS",
    "Android",
    "Dart",
    "Clean Architecture",
    "Fintech",
    "Riverpod",
    "BLoC",
    "React",
  ],
  authors: [{ name: "Jesusblessing Dominion" }],
  openGraph: {
    title: "Jesusblessing Dominion | Flutter & Mobile Application Developer",
    description:
      "5 years of software engineering experience specializing in production fintech mobile applications on iOS & Android.",
    url: "https://dom-portfolio-gold.vercel.app",
    siteName: "Jesusblessing Dominion Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black-100 text-slate-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
