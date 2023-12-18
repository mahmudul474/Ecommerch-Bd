import Layout from "@/components/Layots/RootLayot";
import { isloggedin } from "@/services/auth.services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Verify() {
  const router = useRouter();

  const authenticationUser = isloggedin();

  const { token } = router.query;
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmations] = useState("");

  useEffect(() => {
    setLoading(true);
    if (token) {
      fetch(
        `https://api.dreamfurniturebd.com/api/v1/auth/confirm-account?token=${token}`,
        {
          method: "POST",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setConfirmations(data?.message);

          setTimeout(() => {
            if (authenticationUser) {
              router.push("/");
            } else {
              router.push("/login");
            }
          }, 3000);
          setLoading(false);
        })
        .catch((error) => {
          setConfirmations(error.message);
        });
    }
  }, [token]);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <main className="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div className="md:flex items-center">
            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
              <i className="bx bx-error text-3xl"></i>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold">{confirmation}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
Verify.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
