import Layout from "@/components/Layots/RootLayot";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Verify() {
  const router = useRouter();

  const { token } = router.query;
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
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
          setLoading(false);
        });
    }
  }, [token]);




  if(loading){
    return <h1>Loading....</h1>
  }

  return <></>;
}
Verify.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
