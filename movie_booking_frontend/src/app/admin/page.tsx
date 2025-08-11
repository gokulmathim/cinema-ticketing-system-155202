export default function AdminDashboardPage() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Admin Dashboard</h2>
      <p className="mb-3">Welcome, Admin! Use the sidebar to manage movies, showtimes, and bookings.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-[var(--color-primary)] text-white rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🎬</span>
          <span className="font-semibold">12 Movies</span>
        </div>
        <div className="bg-[var(--color-accent)] text-white rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">⏰</span>
          <span className="font-semibold">28 Showtimes</span>
        </div>
        <div className="bg-[var(--color-secondary)] text-black rounded-lg p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">📦</span>
          <span className="font-semibold">72 Bookings</span>
        </div>
      </div>
    </div>
  );
}
