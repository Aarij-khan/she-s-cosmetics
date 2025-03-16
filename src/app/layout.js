import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./componensts/footer";
import Whatsappbutton from "./componensts/whatsappbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "She's cosmetics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Whatsappbutton/>
      <Footer/>
      </body>
    </html>
  );
}
