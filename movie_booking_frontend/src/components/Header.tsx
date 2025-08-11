"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { getUserRole, clearToken, clearUserRole } from "@/utils/auth";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Movies" },
  { href: "/history", label: "Booking History" },
];

const adminLinks = [
  { href: "/admin", label: "Admin Dashboard" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setRole(getUserRole());
  }, []);

  const logout = () => {
    clearToken();
    clearUserRole();
    router.push("/login");
  };

  return (
    <header className="w-full flex justify-between items-center px-6 h-[var(--header-height)] bg-[var(--color-primary)] text-white shadow-lg">
      <Link href="/" className="text-lg font-bold tracking-wide">
        🎬 CineBooking
      </Link>
      <nav className="flex space-x-4">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded ${
              pathname === link.href ? "bg-[var(--color-accent)] text-black" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        {role === "admin" && adminLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded ${
              pathname.startsWith("/admin") ? "bg-[var(--color-secondary)] text-black" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        {role ? (
          <button onClick={logout} className="ml-2 px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-medium">
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className={`px-3 py-2 rounded ${
              pathname === "/login" ? "bg-[var(--color-secondary)] text-black" : ""
            }`}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
