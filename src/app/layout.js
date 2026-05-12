import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alocode - Learn to code",
  description: "Learn to code with Alocode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Gradient background — fixed, behind everything */}
        <div className="fixed inset-0 -z-10">
          <AnimatedBackground
            effect="Halo Gradient"
            color1="#F5F5F5"
            color2="#DFF1F1"
            color3="#F6F3EB"
            showParticles={true}
            particleColor="#c47a7a"
          />
        </div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
