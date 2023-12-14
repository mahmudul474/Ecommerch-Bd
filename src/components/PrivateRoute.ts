// components/PrivateRoute.js

import { isloggedin } from "@/services/auth.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }: any) => {
  const router = useRouter();
  const isAuthenticated = isloggedin();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
};

export default PrivateRoute;
