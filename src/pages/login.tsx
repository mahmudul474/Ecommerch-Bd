import Layout from "@/components/Layots/RootLayot";
import React, { useState } from "react";
import { useFormik } from "formik";

import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUserLoginMutation } from "@/helperConfige/authApi";

const userSchema = yup.object({
  email: yup.string().email().required("Please enter email "),
  password: yup.string().min(6).required("Please enter password "),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Register() {
  const [userLogin] = useUserLoginMutation();

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
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <section className="bg-gray-50  ">
        <div className="flex flex-col items-center justify-center px-6 py- mx-auto md:h-screen lg:py-0">
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

                <span className="text-left my-1 underline  cursor-pointer mt-2">
                  {" "}
                  Forgate Password ?
                </span>
                <button
                  type="submit"
                  className="w-full  border border-black  bg-primary  text-black hover:border  hover:border-primary rounded-lg hover:bg-transparent   font-medium   text-sm px-5 py-2.5 text-center  "
                >
                  Sing-in
                </button>
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
