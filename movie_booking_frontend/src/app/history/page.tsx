"use client";
import { useEffect } from "react";
import { getUserRole } from "@/utils/auth";
import { useRouter } from "next/navigation";

const demoHistory = [
  {
    id: 1,
    movie: "Oppenheimer",
    showtime: "2024-07-13 19:00",
    seats: ["A7", "A8"],
    amount: 24,
    status: "Completed",
  },
  {
    id: 2,
    movie: "Past Lives",
    showtime: "2024-07-02 15:00",
    seats: ["C1"],
    amount: 12,
    status: "Completed",
  },
];

export default function BookingHistoryPage() {
  const router = useRouter();

  useEffect(() => {
    if (!getUserRole()) router.push("/login");
  }, [router]);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-7 text-[var(--color-primary)]">Your Bookings</h2>
      <div className="rounded-lg bg-white border border-gray-100 shadow-sm overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-3 py-2">Movie</th>
              <th className="px-3 py-2">Showtime</th>
              <th className="px-3 py-2">Seats</th>
              <th className="px-3 py-2">Amount</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoHistory.map(b => (
              <tr key={b.id} className="border-t">
                <td className="px-3 py-2">{b.movie}</td>
                <td className="px-3 py-2">{b.showtime}</td>
                <td className="px-3 py-2">{b.seats.join(", ")}</td>
                <td className="px-3 py-2">${b.amount}</td>
                <td className="px-3 py-2">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
