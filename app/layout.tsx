import type { Metadata } from "next";
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
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
