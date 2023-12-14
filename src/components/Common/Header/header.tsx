import Image from "next/image";
import TopNav from "./topNav";
import logo from "../../../assates/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Megamenu from "./megamenu";
import MobaileMegamenu from "./mobilemegamenu";

import { FaUser } from "react-icons/fa";
import { isloggedin, removeUserInfo } from "@/services/auth.services";
import { authkey } from "@/constancs/storage.key";
import { useRouter } from "next/router";
import { useGetSearchProductsQuery } from "@/redux/api/products/productSlice";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const isAuthenticated = isloggedin();
  const router = useRouter();
  const [searchValue, setSerchvalue] = useState("");

  const {
    data: products,
    isLoading,
    isError,
  } = useGetSearchProductsQuery(searchValue);
  const searchProduct = products?.data?.data;

  console.log(searchProduct);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handelSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const from = e.target;
    router.push(`/search-result/${searchValue}`);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <TopNav></TopNav>
      </div>
      <div className="bg-white">
        <div className="border   px-6">
          <div className="flex justify-between">
            <span
              className="my-auto w-10 lg:hidden cursor-pointer"
              onClick={handleToggleSidebar}
            >
              <FaBars></FaBars>
            </span>

            <div className="flex   w-40 items-center">
              <Link href="/" className="">
                <Image
                  layout="responsive"
                  loading="lazy"
                  src={logo}
                  alt="logo"
                />
              </Link>
            </div>

            <form
              onSubmit={handelSearch}
              className="w-2/6 mt-4    relative hidden lg:block"
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => {
                    setSerchvalue(e.target.value);
                  }}
                  name="fromdata"
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50     dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white   "
                  placeholder="Example :  door..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-gray-600 hover:bg-red-400  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  "
                >
                  Search
                </button>
              </div>
              {searchProduct && searchProduct.length > 0 && (
                <div className="absolute top-14 z-50 h-[400px] overflow-x-auto shadow-xl w-full bg-slate-300">
                  <table className="w-full table-auto">
                    <tbody>
                      {searchProduct.map((product: any, index: number) => (
                        <tr
                          key={index}
                          className="border-b border-gray-200 dark:border-gray-800"
                        >
                          <Link href={`product/${product?.slug}`}>  <td className="flex items-center cursor-pointer  px-6 py-3 font-medium">
                            <div className="flex">
                              <img
                                className="object-cover w-10 h-10 mr-4 rounded-xl"
                                src={product.thumbnail}
                                alt=""
                              />
                              <div>
                                <p className="text-sm  capitalize font-medium dark:text-gray-400">
                                  {product.name}
                                </p>
                              </div>
                            </div>
                          </td></Link>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </form>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <Link href="/cart" className="flex space-x-2">
                  {" "}
                  <div className="relative ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-medium">Cart</span>
                </Link>
              </div>

              <div className="  flex cursor-pointer items-center gap-x-1 ">
                {isAuthenticated ? (
                  <div className="relative">
                    <Link
                      href="/user/dashbord"
                      className="text-black font-bold py-2 px-4 rounded"
                    >
                      <span className="text-xl text-black">
                        <FaUser />
                      </span>
                    </Link>
                  </div>
                ) : (
                  <Link href="/login">
                    <span className="text-sm font-medium">Sign in</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block md:block">
            <Megamenu></Megamenu>
          </div>
        </div>
      </div>

      <form onSubmit={handelSearch} className=" lg:hidden mx-3">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            name="fromdata"
            type="search"
            onChange={(e) => {
              setSerchvalue(e.target.value);
            }}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5   bg-slate-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div
        className={`${
          sidebarOpen
            ? "translate-x-0 w-full lg:hidden"
            : "-translate-x-[3000px]"
        } bg-gray-200 w-full  h-screen z-50  fixed lg:hidden top-0 left-0 shadow-md z-50 transform transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleToggleSidebar}
        >
          <FaTimes />
        </span>

        <aside className="w-full z-50 p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
          <MobaileMegamenu setSidebarOpen={setSidebarOpen} />
        </aside>
      </div>
    </div>
  );
}
