import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Pops Investment - Feel the Pops",
  description:
    "Invest in Star Pops, Ghana's premier popcorn business. Join us in revolutionizing the snack industry and empowering Ghana's economy.",
  keywords: "Star Pops, investment, popcorn, Ghana, business, startup, equity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-yellow-50 to-orange-50`}
      >
        {children}
      </body>
    </html>
  );
}
