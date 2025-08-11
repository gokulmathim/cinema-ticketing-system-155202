import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/movies", label: "Movies" },
  { href: "/admin/showtimes", label: "Showtimes" },
  { href: "/admin/bookings", label: "Bookings" },
];

export default function AdminSideNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2 p-4 pt-8 w-48 bg-[var(--color-background)] border-r border-gray-200 h-full min-h-[80vh]">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-2 rounded font-medium transition ${
            pathname === link.href ? "bg-[var(--color-accent)] text-white" : "hover:bg-gray-100"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
