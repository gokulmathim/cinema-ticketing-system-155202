const demoShowtimes = [
  {
    id: 201,
    movie: "Oppenheimer",
    time: "2024-07-13 19:00",
    seats: 60,
  },
  {
    id: 202,
    movie: "Past Lives",
    time: "2024-07-02 15:00",
    seats: 40,
  },
];

export default function AdminShowtimesPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-5 text-[var(--color-primary)]">Manage Showtimes</h2>
      <button className="mb-4 px-4 py-2 rounded bg-[var(--color-accent)] text-white">+ Add Showtime</button>
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-100">
        <table className="min-w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-3 py-2">Movie</th>
              <th className="px-3 py-2">Time</th>
              <th className="px-3 py-2">Seats</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {demoShowtimes.map(s => (
              <tr key={s.id} className="border-t">
                <td className="px-3 py-2">{s.movie}</td>
                <td className="px-3 py-2">{s.time}</td>
                <td className="px-3 py-2">{s.seats}</td>
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
