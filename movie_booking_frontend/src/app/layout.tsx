import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CineBooking",
  description: "Book tickets for your favorite movies online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main className="min-h-[calc(100vh-var(--header-height))] w-full bg-[var(--color-background)]">
          {children}
        </main>
      </body>
    </html>
  );
}
