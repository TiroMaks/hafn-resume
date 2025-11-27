import type { Metadata } from "next";
import { onest } from "@/app/fonts";
import "./globals.css";

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
    <html lang="ru" className={`${onest.variable} font-sans`}>
      <body>
        {children}
      </body>
    </html>
  );
}
