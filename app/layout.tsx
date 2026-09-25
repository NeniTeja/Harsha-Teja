import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://harshateja.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Harsha Teja | Java Full Stack Developer",
  description:
    "Java Full Stack Developer building practical applications with Java, Spring Boot, React and SQL.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Harsha Teja | Java Full Stack Developer",
    description:
      "Java Full Stack Developer building practical applications with Java, Spring Boot, React and SQL.",
    url: siteUrl,
    siteName: "Harsha Teja",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Teja | Java Full Stack Developer",
    description:
      "Java Full Stack Developer building practical applications with Java, Spring Boot, React and SQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
