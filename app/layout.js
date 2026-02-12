import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata = {
  metadataBase: new URL('https://codezilla.io'),
  title: {
    default: "Codezilla - Executive Precision Enterprise Software Development",
    template: "%s | Codezilla"
  },
  description: "Codezilla delivers executive precision in enterprise software development, AI integration, and scalable system architecture.",
  keywords: ["Enterprise Software", "AI Development", "Software Architecture", "Codezilla", "Web Development", "Mobile App Development"],
  authors: [{ name: "Codezilla" }],
  creator: "Codezilla",
  publisher: "Codezilla",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Codezilla - Executive Precision",
    description: "Codezilla delivers executive precision in enterprise software development.",
    url: 'https://codezilla.io',
    siteName: 'Codezilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Codezilla - Executive Precision",
    description: "Codezilla delivers executive precision in enterprise software development.",
    creator: '@codezilla',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} bg-background-light antialiased selection:bg-primary selection:text-white overflow-x-hidden`}>
        <Navbar />
        <div className="min-h-screen pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
