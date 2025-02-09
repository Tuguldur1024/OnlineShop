"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  currentUser: null | string;
  isLoading: boolean;
  signin: (userid: string) => void;
  logout: () => void;
};

const AuthContext = createContext<ContextType>({
  currentUser: null,
  isLoading: false,
  signin: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setCurrentUser(parsedUser.userid);
    }
    setIsLoading(false);
  }, []);

  const signin = (userid: string) => {
    localStorage.setItem("user", JSON.stringify({ userid }));
    setCurrentUser(userid);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoading, currentUser, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
