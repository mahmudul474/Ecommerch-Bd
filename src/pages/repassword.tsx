import Layout from "@/components/Layots/RootLayot";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Repassword() {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { token } = router.query;

  const handleNewPassWord = (e: any) => {
    e.preventDefault();

    if (token && password) {
      fetch(`https://api.dreamfurniturebd.com/api/v1/auth/reset-password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
        body: JSON.stringify({ newPassword: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="flex   my-10 flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Set New Password</h2>
        </div>
        <form
          onSubmit={handleNewPassWord}
          className="flex flex-col max-w-md space-y-5"
        >
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-gray-500 text-white">
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
Repassword.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
