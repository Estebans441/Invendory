import type { Metadata } from "next";
import "./globals.css";
import Header from "../src/components/layout/Header/Header";
import Menu from "@/src/components/layout/Menu/Menu";

export const metadata: Metadata = {
  title: "Invendory",
  description: "Inventory management demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="menu-layout">
          <Menu />
          <main className="main-content">
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
