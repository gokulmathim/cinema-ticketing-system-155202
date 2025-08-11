"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setToken, setUserRole } from "@/utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for login/register API call
    if (!email || !password) {
      setError("Enter email and password.");
      return;
    }
    if (isRegistering) {
      // Register
      setToken("demo-user-token");
      setUserRole("user");
      router.push("/");
    } else {
      // Login: if email contains admin, give admin role
      setToken("demo-user-token");
      setUserRole(email.includes("admin") ? "admin" : "user");
      router.push(email.includes("admin") ? "/admin" : "/");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-50">
        <h2 className="text-2xl mb-5 font-bold text-[var(--color-primary)]">
          {isRegistering ? "Register" : "Login"}
        </h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="p-3 rounded border"
            placeholder="Email"
            autoComplete="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="p-3 rounded border"
            placeholder="Password"
            autoComplete={isRegistering ? "new-password" : "current-password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] transition"
          >
            {isRegistering ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsRegistering(false)} className="text-[var(--color-accent)] font-medium">
                Login
              </button>
            </>
          ) : (
            <>
              No account?{" "}
              <button onClick={() => setIsRegistering(true)} className="text-[var(--color-accent)] font-medium">
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
