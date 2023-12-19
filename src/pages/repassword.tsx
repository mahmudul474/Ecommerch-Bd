import Layout from "@/components/Layots/RootLayot";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Repassword() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const router = useRouter();
  const { token } = router.query;
  const [isloading, setIsloading] = useState(false);

  const handleNewPassWord = (e: any) => {
    e.preventDefault();
    setIsloading(true);
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
          setConfirmation(data?.message);
          toast.error(data.message, { autoClose: 3000 });
          router.push("/login");
          setIsloading(false);
        })
        .catch((error) => {
          setConfirmation(error.message);
          setIsloading(false);
          toast.error(error.message, { autoClose: 3000 });
        });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex   my-10 flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Set New Password</h2>
        </div>
        <form
          onSubmit={handleNewPassWord}
          className="flex flex-col max-w-md space-y-5   mb-7"
        >
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border    border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />

            <span
              className="absolute right-2 top-10"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <p className="text-md font-bold my-3 text-center ">{confirmation}</p>

          {isloading ? (
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-red-400 transition duration-150 ease-in-out border-2 border-red-400 rounded-md shadow cursor-not-allowed"
                disabled
              >
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-red-500 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-gray-500 text-white"
            >
              Confirm
            </button>
          )}
        </form>
      </div>
    </>
  );
}
Repassword.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
