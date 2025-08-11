import { API } from "./constants";

// PUBLIC_INTERFACE
/**
 * Performs a generic API fetch with auth header (if token exists), returns promise with JSON data.
 * @param endpoint - API endpoint, e.g. "/movies"
 * @param options - fetch options (method, body, etc.)
 */
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${API.BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    try {
      throw new Error(JSON.parse(text).message || response.statusText);
    } catch {
      throw new Error(response.statusText);
    }
  }

  return await response.json();
}
