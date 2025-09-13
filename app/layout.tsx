import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "./components/helper/Hoc/Provider";
import ResponsiveNav from "./components/articles/navbar/ResponsiveNav";
import Footer from "./components/articles/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

const font = Roboto({
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Meet Mainaa",
  description: "Next js Template",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}>
        <Provider>
        <ResponsiveNav/>
        {children}
        <ScrollToTop/>
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
