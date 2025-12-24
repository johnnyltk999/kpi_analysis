"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

interface WithAuthOptions {
  allowedRoles: string[];
  redirectPath?: string; // no Role is redirect
}

export function withAuth<P>(
  WrappedComponent: React.ComponentType<P>,
  options: WithAuthOptions
) {
  const { allowedRoles, redirectPath = "/dashboard" } = options;

  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const userData = localStorage.getItem("user");
      if (!userData) {
        router.push("/login");
        return;
      }

      const parsedUser: User = JSON.parse(userData);
      setUser(parsedUser);

      if (!allowedRoles.includes(parsedUser.role)) {
        router.push(redirectPath);
      } else {
        setLoading(false);
      }
    }, []);

    if (loading || !user) return null; // หรือแสดง spinner

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
