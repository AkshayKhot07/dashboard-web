import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dashbaord App",
  description: "Admin Dashbaord for user tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="!font-dm-sans">
        <div className="flex">

        <aside className="w-[108px]  hidden md:block">
          <Sidebar />
        </aside>
        <div className="w-full bg-background-200">
        <Header />
        <main className="min-h-screen w-full">{children}</main>
        </div>
        </div>
      </body>
    </html>
  );
}
