import type { Metadata } from "next";
import "@/app/globals.css";
import { HeaderAuth } from "@/src/components/layout/header/header1";
import Menu from "@/src/components/layout/menu/menu1";

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
      <>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <HeaderAuth />
        <div className="menu-layout">
          <aside className="menu-container" aria-label="Sidebar navigation">
            <Menu />
          </aside>
          <main id="main-content" className="main-content" role="main">
            {children}
          </main>
        </div>
      </>
  );
}
