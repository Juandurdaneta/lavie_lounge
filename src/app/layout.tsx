import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/**
 * Site-wide metadata for SEO
 * Targets: private business club, entrepreneur networking, South Florida
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://lavielounge.com"),
  title: {
    default: "La Vie Lounge | Private Business Club for Entrepreneurs | South Florida",
    template: "%s | La Vie Lounge",
  },
  description:
    "La Vie Lounge is an exclusive, invite-only private business club in Miramar, South Florida for six and seven figure entrepreneurs. Connect with founders, owners, and investors in a curated community.",
  keywords: [
    "private business club South Florida",
    "entrepreneur networking Miramar",
    "exclusive business community Florida",
    "founder networking club",
    "high-net-worth networking South Florida",
    "business club for entrepreneurs",
    "private networking events Florida",
    "executive networking group",
    "investor community South Florida",
    "Miramar business community",
  ],
  authors: [{ name: "La Vie Lounge" }],
  creator: "La Vie Lounge",
  publisher: "La Vie Lounge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lavielounge.com",
    siteName: "La Vie Lounge",
    title: "La Vie Lounge | Private Business Club for Entrepreneurs",
    description:
      "A private, invite-only business club where six and seven figure entrepreneurs connect, share strategy, and stem opportunities in South Florida.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "La Vie Lounge - Private Business Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Vie Lounge | Private Business Club for Entrepreneurs",
    description:
      "A private, invite-only business club where six and seven figure entrepreneurs connect, share strategy, and stem opportunities in South Florida.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lavielounge.com",
  },
  category: "Business",
};

/**
 * JSON-LD structured data for rich search results
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lavielounge.com/#organization",
      name: "La Vie Lounge",
      url: "https://lavielounge.com",
      description:
        "Private business club for six and seven figure entrepreneurs in South Florida",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miramar",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Place",
        name: "South Florida",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://lavielounge.com/#localbusiness",
      name: "La Vie Lounge",
      description:
        "Exclusive private business club for entrepreneurs, founders, and investors",
      url: "https://lavielounge.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miramar",
        addressRegion: "FL",
        addressCountry: "US",
      },
      priceRange: "$$$",
      membershipType: "Private, Invite-Only",
    },
    {
      "@type": "WebSite",
      "@id": "https://lavielounge.com/#website",
      url: "https://lavielounge.com",
      name: "La Vie Lounge",
      publisher: {
        "@id": "https://lavielounge.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a1628" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
