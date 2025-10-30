import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/src/components/layout/header/header";

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
      <Header />
      <main>
        <div className="flex h-screen w-full items-center justify-center p-6 md:p-10">
          {children}
        </div>
      </main>
    </>
  );
}
