import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Section20 Consult | Home",
  description:
    "Trusted management consulting services for businesses seeking strategic guidance. Drive growth, efficiency, and success with our expert team. Contact us today!",
  keywords: [
    "Management Consulting Services",
    "Financial Advisory and Planning",
    "Human Resources Solutions",
    "Marketing Consultancy",
    "Healthcare Consulting New York",
    "Strategic Technology Solutions",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${poppins.variable} ${roboto.variable}`}
    >
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
