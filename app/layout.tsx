import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Font loaded via Next.js (prevents flash of unstyled content) ──
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',          // shows fallback font instantly, swaps when ready
  preload: true,
});

// ── SEO Metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Perfect Logistics | India's Trusted Petro-Logistics & Industrial Services",
    template: "%s | Perfect Logistics",
  },
  description:
    "Perfect Logistics offers end-to-end petro-logistics solutions — HSD/MS tank cleaning, pipeline installation, calibration, O&M services, and warehouse management across India. Serving BPCL, Shell, TCS, HCL, Airtel & more.",
  keywords: [
    "petro logistics India",
    "HSD tank cleaning",
    "MS tank cleaning",
    "underground tank cleaning",
    "pipeline installation India",
    "PESO certification services",
    "O&M petrol station",
    "tank calibration services",
    "oil and gas maintenance India",
    "logistics company Mangalore",
    "industrial services Bangalore",
    "Perfect Logistics",
    "Senthil Chettiar logistics",
    "warehouse management India",
    "BPCL shell logistics partner",
  ],
  alternates: {
    canonical: "https://www.perfectlogistics.org",
  },
  authors: [{ name: "Perfect Logistics", url: "https://www.perfectlogistics.org" }],
  creator: "Perfect Logistics",
  publisher: "Perfect Logistics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.perfectlogistics.org",
    siteName: "Perfect Logistics",
    title: "Perfect Logistics | India's Trusted Petro-Logistics & Industrial Services",
    description:
      "End-to-end petro-logistics solutions — HSD/MS tank cleaning, pipeline installation, calibration, O&M services & warehouse management across India.",
    images: [
      {
        url: "https://www.perfectlogistics.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Logistics - Petro Logistics Solutions India",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Perfect Logistics | India's Trusted Petro-Logistics & Industrial Services",
    description:
      "End-to-end petro-logistics solutions — HSD/MS tank cleaning, pipeline installation, calibration & O&M services across India.",
    images: ["https://www.perfectlogistics.org/og-image.jpg"],
  },
};

// ── Structured Data (JSON-LD) ──────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Perfect Logistics",
  description:
    "Perfect Logistics is India's trusted petro-logistics and industrial services provider — specializing in HSD/MS tank cleaning, pipeline installation, PESO calibration, O&M services, and warehouse management.",
  url: "https://www.perfectlogistics.org",
  logo: "https://www.perfectlogistics.org/logo.png",
  image: "https://www.perfectlogistics.org/og-image.jpg",
  telephone: ["+91-99000-48837", "+91-94820-48837"],
  email: "info@perfectlogistics.in",
  foundingDate: "2000",
  founder: {
    "@type": "Person",
    name: "Ln. Senthil K. Chettiar",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, Vishnukripa Building, NH 17, Opp. Syndicate Bank, Kulai",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    postalCode: "575010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9141,
    longitude: 74.856,
  },
  areaServed: [
    "Mangalore", "Bangalore", "Chennai", "Hyderabad",
    "Delhi", "Ernakulam", "Coimbatore", "India",
  ],
  serviceType: [
    "HSD Tank Cleaning",
    "MS Tank Cleaning",
    "Underground Tank Cleaning",
    "Pipeline Installation",
    "PESO Calibration",
    "O&M Petrol Station",
    "Warehouse Management",
    "Industrial Maintenance",
  ],
  sameAs: ["https://www.perfectlogistics.org"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

// ── Root Layout ────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-secondary text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}