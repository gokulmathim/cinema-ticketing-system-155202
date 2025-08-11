import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";

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
        <main className="min-h-[calc(100vh-var(--header-height))] w-full bg-[var(--color-background)] flex flex-col md:flex-row relative">
          {/* Sidebar for filters, not rendered in admin area */}
          {/* Hide sidebar if on /admin or subroutes by checking URL in a client component (future improvement).
              For now, sidebar always appears—can be improved by routing context. */}
          <div
            className="
              hidden md:block
              relative
              z-10
            "
            style={{ minWidth: "220px" }}
          >
            <FilterSidebar />
          </div>
          <div className="flex-1 px-0 md:px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
