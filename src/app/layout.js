import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteCursor from "@/components/layout/SiteCursor";
import SiteCursorGrid from "@/components/layout/SiteCursorGrid";
import LoadingBanner from "@/components/layout/LoadingBanner";

/* Hero frame — Outfit medium (clean, lighter weight from client screenshot) */
const display = localFont({
  src: [
    {
      path: "../fonts/outfit-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const serif = localFont({
  src: [
    {
      path: "../fonts/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const mono = localFont({
  src: [
    {
      path: "../fonts/jetbrains-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/jetbrains-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/jetbrains-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://codingzen.in"),
  title: {
    default: "CodingZen | Online Coding Classes for Kids & Teens",
    template: "%s | CodingZen",
  },
  description:
    "Live mentor-led coding classes for kids and teens. Think, create, apply — Scratch to Unity, 1:1 or small groups across Delhi NCR & online.",
  keywords: [
    "coding classes for kids",
    "coding for teens",
    "online coding classes India",
    "Scratch classes",
    "Python for kids",
    "CodingZen",
    "Delhi coding academy",
  ],
  authors: [{ name: "CodingZen" }],
  creator: "CodingZen",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codingzen.in",
    siteName: "CodingZen",
    title: "CodingZen | Coding Classes for Kids & Teens",
    description:
      "Mentor-led live coding that turns curiosity into shipped projects — for kids, teens, and parents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodingZen | Coding Classes for Kids & Teens",
    description:
      "A calm place to think. A brave place to create. A real path to apply.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  alternates: {
    canonical: "https://codingzen.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full w-full flex-col overflow-x-clip font-display">
        <div className="flex min-h-full w-full flex-1 flex-col overflow-x-clip">
          <LoadingBanner />
          <div className="hidden md:block">
            <SiteCursorGrid />
            <SiteCursor />
          </div>
          <SmoothScroll>
            <div className="relative z-[1] flex min-h-full w-full flex-1 flex-col overflow-x-clip">
              <Navbar />
              <main className="w-full flex-1 overflow-x-clip">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
