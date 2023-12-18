import Layout from "@/components/Layots/RootLayot";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Verify() {
  const router = useRouter();

  const { token } = router.query;

  useEffect(() => {
    if (token) {
      fetch(
        `https://api.dreamfurniturebd.com/api/v1/auth/confirm-account?token=${token}`,
        {
          method: "POST",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [token]);

  return <div></div>;
}
Verify.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
