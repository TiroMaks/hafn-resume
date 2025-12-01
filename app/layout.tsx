import type { Metadata } from "next";
import { martianMono } from "@/app/fonts";
import "./globals.css";
import MyHeader from "./components/MyHeader";

export const metadata: Metadata = {
  title: "Веб-сайт для резюме",
  description: "Этот сайт - онлайн резюме, с проектами которые я реализовал",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${martianMono.variable} font-sans`}>
      <body className="flex flex-col items-center">
        <MyHeader />
        {children}
      </body>
    </html>
  );
}
