import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import svMessages from "@/messages/sv.json";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rafa Allservice AB – Städ- och Restaurangbemanning",
  description: "Professionella städ- och restaurangbemanningstjänster i Stockholm",
  generator: "v0.app",
  icons: {
        icon: '/logo/Logo.png',
        apple: '/logo/Logo.png'
      },  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={svMessages} locale="sv">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
