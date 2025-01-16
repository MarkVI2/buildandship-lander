import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from './context/TransitionContext';

const readex_pro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Build & Ship",
  description: "Cool people building and shipping cool stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${readex_pro.variable} antialiased`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
