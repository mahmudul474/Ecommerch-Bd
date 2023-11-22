import Layout from "@/components/Layots/RootLayot";
import React from "react";
import { useFormik } from "formik";

import * as yup from "yup";
import Link from "next/link";
import { useUserRegistetionsMutation } from "@/helperConfige/authApi";

const userSchema = yup.object({
  firstName: yup.string().required("Please enter  First Name"),
  lastName: yup.string().required("Please enter  Last Name"),
  email: yup.string().email().required("Please enter email "),
  number: yup.string().min(11).required("Please enter Phone Number "),
  password: yup.string().min(6).required("Please enter password "),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  password: "",
};

export default function Register() {
  const [userRegistetions, { isLoading, isError, isSuccess }] =
    useUserRegistetionsMutation();

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
        const userdata = {
          name: {
            firstName: values.firstName,
            lastName: values.lastName,
          },
          email: values.email,
          phone: values.number,
          password: values.password,
        };

        const res = await userRegistetions({ ...userdata }).unwrap();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <section className=" my-20  ">
        <div className="flex flex-col items-center justify-center px-6 py- mx-auto   lg:py-0">
          <div className="w-full bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Create and account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Example: jone"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="false"
                    />
                    {errors.firstName && touched.firstName ? (
                      <p className="text-red-600">{errors.firstName}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Example: dhoe"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.lastName && touched.lastName ? (
                      <p className="text-red-600">{errors.lastName}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

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
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone-Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Example: +8801********"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.number && touched.number ? (
                    <p className="text-red-600">{errors.number}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <p className="text-red-600">{errors.password}</p>
                  ) : (
                    ""
                  )}
                </div>

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
                    SingUp
                  </button>
                )}

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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
