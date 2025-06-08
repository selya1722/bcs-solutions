import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BC Security Solutions",
  description: "Trusted 24/7 security services for businesses, residences, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
       
      </body>
    </html>
  );
}