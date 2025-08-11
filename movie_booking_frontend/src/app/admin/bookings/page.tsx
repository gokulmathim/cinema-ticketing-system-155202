const demoBookings = [
  {
    id: 301,
    movie: "Oppenheimer",
    showtime: "2024-07-13 19:00",
    user: "alice@example.com",
    seats: ["A7", "A8"],
    amount: 24,
    status: "Completed",
  },
  {
    id: 302,
    movie: "Past Lives",
    showtime: "2024-07-02 15:00",
    user: "bob@example.com",
    seats: ["C1"],
    amount: 12,
    status: "Canceled",
  },
];

export default function AdminBookingsPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-5 text-[var(--color-primary)]">Manage Bookings</h2>
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-100">
        <table className="min-w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-3 py-2">Movie</th>
              <th className="px-3 py-2">Showtime</th>
              <th className="px-3 py-2">User</th>
              <th className="px-3 py-2">Seats</th>
              <th className="px-3 py-2">Amount</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {demoBookings.map(b => (
              <tr key={b.id} className="border-t">
                <td className="px-3 py-2">{b.movie}</td>
                <td className="px-3 py-2">{b.showtime}</td>
                <td className="px-3 py-2">{b.user}</td>
                <td className="px-3 py-2">{b.seats.join(", ")}</td>
                <td className="px-3 py-2">${b.amount}</td>
                <td className="px-3 py-2">{b.status}</td>
                <td className="px-3 py-2">
                  <button className="mr-2 text-[var(--color-accent)]">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
