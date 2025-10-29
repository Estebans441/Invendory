import type { Metadata } from "next";
import "@/app/globals.css";

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
      <body>
          <main>
            {children}
          </main>
      </body>
  );
}
