export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("token", token);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
}

export function getUserRole(): "admin" | "user" | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("role") as "admin" | "user" | null;
}

export function setUserRole(role: "admin" | "user") {
  if (typeof window === "undefined") return;
  localStorage.setItem("role", role);
}

export function clearUserRole() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("role");
}
