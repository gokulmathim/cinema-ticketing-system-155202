"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserRole } from "@/utils/auth";
import AdminSideNav from "@/components/AdminSideNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Redirect if not admin
    if (getUserRole() !== "admin") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-[80vh]">
      <AdminSideNav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
