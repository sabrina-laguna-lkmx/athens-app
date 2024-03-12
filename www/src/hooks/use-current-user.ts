import { AUTH_TOKEN_KEY } from "@/services/auth-service";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

type User = {
  token: string;
  user_id: string;
  email: string;
  accounts: [
    {
      id: string;
      company: string;
      address: string;
      webPakId: number;
      city: string;
      postalCode: string;
    }
  ];
};

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const currentUser = Cookies.get(AUTH_TOKEN_KEY);
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    } else {
      setUser(null);
    }
    setLoadingUser(false);
  }, []);

  return { user, loadingUser };
};
