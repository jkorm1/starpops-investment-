import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Enterprise Investment - Feel the Pops & Chills",
  description:
    "Invest in Star Enterprise, Ghana's premier popcorn and ice cream business. Join us in revolutionizing the snack industry with guaranteed 1.5x returns over 7 months (academic year).",
  keywords:
    "Star Enterprise, Star Pops, Star Ice, investment, popcorn, ice cream, Ghana, business, startup, guaranteed returns, academic year",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-gradient-to-br from-yellow-50 to-orange-50 font-sans"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

