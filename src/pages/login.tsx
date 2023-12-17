import Layout from "@/components/Layots/RootLayot";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUserLoginMutation } from "@/helperConfige/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";

const userSchema = yup.object({
  email: yup.string().email().required("Please enter email "),
  password: yup.string().min(6).required("Please enter password "),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Register() {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();
  const [erormessage, setErrormessage]=useState("")

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const res = await userLogin({ ...values }).unwrap();
        if (res?.data?.accessToken) {
          router.push("/user/dashbord");
        }
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } catch (error:any) {
           setErrormessage(error?.data?.message);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <section className="bg-gray-50 my-10  ">
        <div className="flex flex-col items-center justify-center px-6 py- mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sing-in
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {errors.email && touched.email ? (
                    <p className="text-red-600">{errors.email}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border    border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <span
                    className="absolute right-2 top-10"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.password && touched.password ? (
                    <p className="text-red-600">{errors.password}</p>
                  ) : (
                    ""
                  )}
                </div>
                <Link href="/forgatepassword">
                  {" "}
                  <span className="text-left my-1 underline  cursor-pointer mt-2">
                    {" "}
                    Forgate Password ?
                  </span>
                </Link>

                <p className="text-red-400  capitalize text-center ">{erormessage}</p>
                {isLoading ? (
                  <button
                    disabled
                    type="button"
                    className="flex justify-center items-center w-full border  border-black  rounded-lg  py-2"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      ></path>
                    </svg>
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full  border  border-black    text-black      rounded-lg hover:bg-transparent   font-medium   text-sm px-5 py-2.5 text-center  "
                  >
                    Login
                  </button>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  New in Dream-tuch?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Register.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
