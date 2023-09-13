import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Archivo } from "next/font/google";

// import { Analytics } from "@vercel/analytics/react";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const archivo = Archivo({ subsets: ["latin"], variable: "--archivo" });
const inter = Inter({ subsets: ["latin"], variable: "--Inter" });

export const metadata = {
  title: "Vital Stack",
  description: "Boost Your T-Levels in Just 12 days*...",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <ApolloClientProvider>
        <body>{children}</body>
      </ApolloClientProvider>
    </html>
  );
}
