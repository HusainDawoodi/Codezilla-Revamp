import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-display' });

export const metadata = {
  title: "Codezilla - Executive Precision",
  description: "Codezilla - Executive Precision",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceGrotesk.className} bg-background-light antialiased selection:bg-primary selection:text-white overflow-x-hidden`}>
        <Navbar />
        <div className="min-h-screen pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
