import { useAuth } from "@/context/auth-context";
import Cookies from "js-cookie";

export const AUTH_TOKEN_KEY = "auth-token";

export class InvalidCredentialsError extends Error {
  constructor() {
    super();
    this.name = "InvalidCredentialsError";
  }
}

export async function login(email: string, password: string) {
  try {
    const command = { email, password };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        body: JSON.stringify(command),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new InvalidCredentialsError();
    }

    const user = await response.json();

    Cookies.set(AUTH_TOKEN_KEY, JSON.stringify(user));

    return user;
  } catch (error) {
    throw error;
  }
}

export function logout() {
  Cookies.remove(AUTH_TOKEN_KEY);
}
