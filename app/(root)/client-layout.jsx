"use client";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import Header from "../components/shared/Header.jsx";
import Footer from "../components/shared/Footer.jsx";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ClientRootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${poppins.variable} antialiased`}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </SessionProvider>
  );
}
