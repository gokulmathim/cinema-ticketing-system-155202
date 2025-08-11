"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

/* NOTE: Dynamic route /booking/[showtimeId] uses "use client" (client-side rendering).
   For static export, dynamic params can't be provided, so this page will not be statically generated. */

// Simulate seat map (rows x cols)
const rows = 5;
const cols = 10;
const taken = [5, 8, 13, 21, 22, 34];

export default function BookingPage() {
  const { showtimeId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [step, setStep] = useState<"seats" | "payment" | "complete">("seats");
  const router = useRouter();

  function toggleSeat(seat: number) {
    if (taken.includes(seat)) return;
    setSelectedSeats(seats =>
      seats.includes(seat) ? seats.filter(s => s !== seat) : [...seats, seat]
    );
  }

  function handleBook() {
    // Would call API here
    setStep("payment");
  }

  function handleConfirmPayment() {
    // Would integrate payment and call API here
    setStep("complete");
    setTimeout(() => router.push("/history"), 2000);
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
        Seat Selection - Showtime {showtimeId}
      </h2>
      {step === "seats" && (
        <>
          <div className="grid grid-cols-10 gap-2 mb-7">
            {[...Array(rows * cols)].map((_, i) => (
              <button
                key={i}
                className={`aspect-square w-8 rounded-md ${
                  taken.includes(i)
                    ? "bg-gray-400 cursor-not-allowed"
                    : selectedSeats.includes(i)
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]"
                }`}
                onClick={() => toggleSeat(i)}
                disabled={taken.includes(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="mb-4">Selected Seats: <span className="font-semibold">{selectedSeats.map(s => s + 1).join(", ")}</span></div>
          <button
            onClick={handleBook}
            className="px-6 py-2 rounded bg-[var(--color-primary)] text-white font-medium disabled:bg-gray-300"
            disabled={selectedSeats.length === 0}
          >
            Book &amp; Proceed to Payment
          </button>
        </>
      )}

      {step === "payment" && (
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <span className="block mb-2 text-lg">Seats: {selectedSeats.map(s => s + 1).join(", ")}</span>
            <span className="block text-gray-500 mb-2">Amount: <b>${selectedSeats.length * 12}</b></span>
          </div>
          {/* Placeholder for payment gateway integration */}
          <button
            className="px-8 py-2 bg-[var(--color-accent)] rounded text-white font-semibold"
            onClick={handleConfirmPayment}
          >
            Confirm &amp; Pay
          </button>
          <span className="mt-2 text-sm text-gray-400">[Payment gateway placeholder]</span>
        </div>
      )}

      {step === "complete" && (
        <div className="flex flex-col items-center pt-16 pb-24">
          <span className="block text-5xl mb-2">🎟️</span>
          <h3 className="text-2xl font-semibold mb-2 text-[var(--color-primary)]">Booking Confirmed!</h3>
          <p className="mb-2">Thank you. Redirecting to your booking history...</p>
        </div>
      )}
    </div>
  );
}
