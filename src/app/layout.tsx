import type { Metadata } from "next";
import localFont from "next/font/local";
import { Frijole, Sacramento } from "next/font/google";
import "./globals.css";

const helveticaNow = localFont({
  src: "./fonts/helveticanowtext-black-demo.ttf",
  variable: "--font-helvetica-now",
  weight: "100 900",
});

const frijole = Frijole({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-frijole",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
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
        className={`${helveticaNow.variable} ${frijole.variable} ${sacramento.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
