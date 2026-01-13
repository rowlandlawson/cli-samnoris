import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  title: "CLI Sam Noris Hotel | Luxury Accommodation in Port Harcourt",
  description: "Experience luxury and comfort at CLI Sam Noris Hotel in Port Harcourt. Premium suites, pool bar, restaurant, and exceptional hospitality. Book your stay today.",
  keywords: "luxury hotel Port Harcourt, CLI Sam Noris Hotel, accommodation Port Harcourt, premium hotel Nigeria, hotel booking Port Harcourt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    
    >
      <body
          className="bg-[#F5F3EE] min-h-screen font-sans relative antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
