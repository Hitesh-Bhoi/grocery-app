import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/baseLayout/BaseLayout";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ecobazar — Fresh Groceries Online",
  description: "Shop fresh fruits, vegetables and organic produce at Ecobazar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ margin: "0px" }}>
        <CartProvider>
          <BaseLayout>
            {children}
          </BaseLayout>
        </CartProvider>
      </body>
    </html>
  );
}
