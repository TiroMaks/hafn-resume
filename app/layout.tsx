import type { Metadata } from "next";
import { martianMono } from "@/app/fonts";
import "./globals.css";
import MyHeader from "./components/MyHeader";

export const metadata: Metadata = {
  title: "Резюме сайт - hafn.ru",
  description: "Здесь предоставлена информация о навыках, проектах и контактах с автором",
  robots: {
    index: true,
    follow: true,
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
