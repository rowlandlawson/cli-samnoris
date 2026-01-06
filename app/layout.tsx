import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  title: "Sam noris",
  description: "Hotel booking system",
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
          className="bg-gray-50 min-h-screen font-sans relative"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
