import Image from "next/image";
import TopNav from "./topNav";
import logo from "../../../assates/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function Header() {
  //sidebar  mobile screen
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("sidebar is open ");
  };

  const menuItems = [
    {
      label: "New",
      link: "/",
    },
    {
      label: "Living ",
      subMenu: [{ label: "Bed", link: "/product1", category: [] }],
    },
    {
      label: "Bedroom",
      subMenu: [
        {
          label: "Bed",
          link: "#",
          category: [
            {
              label: "Super Bed",
            },
            {
              label: "Latest-bed",
            },
            {
              label: "Super Bed",
            },
          ],
        },
        {
          label: "Service ",
          link: "/service1",
          category: [
            {
              label: "Super Bed",
            },
            {
              label: "Latest-bed",
            },
            {
              label: "Super Bed",
            },
          ],
        },
        { label: "Service", link: "/service2" },
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        { label: "Service ", link: "/service1" },
        {
          label: "Service",
          link: "/service2",
          category: [
            {
              label: "Super Bed",
            },
            {
              label: "Latest-bed",
            },
            {
              label: "Super Bed",
            },
          ],
        },
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
      ],
    },
    {
      label: "Dining ",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Kitchen",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "KidsRoom",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "SmartFit",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Institutional",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Door",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Interior",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Offics",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service fdfdf dfdfd sdsd sd asd sd ", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Hospital",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "SmartFit",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    {
      label: "Allied",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },

    {
      label: "Interior",
      subMenu: [
        { label: "Service ", link: "/service1" },
        { label: "Service", link: "/service2" },
        // Add more sub-menu items
      ],
    },
    // Add more top-level menu items
  ];

  const [showSubMenu, setShowSubMenu] = useState(null);

  // Functions to handle menu hover and timeouts
  const handleMouseEnter = (index: any) => {
    setShowSubMenu(index);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <TopNav></TopNav>
      </div>
      <div className="bg-white">
        <div className="border   px-6">
          <div className="flex justify-between">
            {/*toglebar*/}
            <span
              className="my-auto w-10 lg:hidden cursor-pointer"
              onClick={handleToggleSidebar}
            >
              <FaBars></FaBars>
            </span>

            <div className="flex items-center">
              <Link href="/" className="">
                <Image layout="responsive" src={logo} alt="logo" />
              </Link>
            </div>

            <div className=" relative w-[70%] ml-6 flex items-center justify-end  flex-1 gap-x-3">
              <input
                type="text"
                className="w-[70%]  h-12  border rounded-xl border-primary te hidden lg:block  px-3 py-2 text-sm"
                placeholder="search"
              />
              <span className="  absolute right-3">
                <svg
                  className="w-4 h-4"
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
              </span>
            </div>

            <div className="ml-2 flex">
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                <div className="relative">
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

                <Link href="/cart">
                  <span className="text-sm font-medium">Cart</span>
                </Link>
              </div>

              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border   hover:bg-gray-100">
                <Link href="/login">
                  <span className="text-sm font-medium">Sign in</span>
                </Link>{" "}
              </div>
            </div>
          </div>
          {/*bottom nav category*/}
          <div className="  hidden  lg:flex items-center justify-between">
            <nav className="menu bg-white  text-black  ">
              <ul className="flex justify-between  space-x-7 items-center	   ">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href={item.link} className="hover:text-yellow-400">
                      {item.label}
                    </a>
                    {item.subMenu && showSubMenu === index && (
                      <ul className="absolute   z-50 left-0  p-4  bg-gray-800 lg:bg-white lg:text-black hidden group-hover:block">
                        <div className="  w-96 overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                          {item.subMenu.map((subItem, subIndex) => (
                            <div key={subIndex}>
              
                              <li  >{subItem.label}</li>
                              <div>
                                {subItem?.category?.map((cat) => (
                                  <p>{cat?.label}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

 

        </div>
      </div>
      {/*responshipe input*/}
      <div className="w-full px-5">
        <input
          type="text"
          className=" mx-auto block my-2 lg:hidden w-full rounded-md border border-gray-700 px-3 py-2 text-sm"
          placeholder="search"
        />
      </div>

      {/* saidbar*/}
      <div
        className={`${
          sidebarOpen
            ? "translate-x-0 w-56   z-50 z-50 lg:hidden"
            : "-translate-x-[3000px]"
        } bg-gray-200 w-56 h-screen z-50  fixed lg:hidden top-0 left-0 shadow-md z-50 transform transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar content */}
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleToggleSidebar}
        >
          <FaTimes />
        </span>

        <aside className="w-full z-50 p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
          <nav className="space-y-8  z-50  text-sm">
            <ul className="flex flex-col  items-start  space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={item.link} className="hover:text-yellow-400">
                    {item.label}
                  </a>
                  {item.subMenu && showSubMenu === index && (
                    <ul className="absolute  z-50 left-0  p-4 bg-gray-800 hidden group-hover:block">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block text-white hover:text-yellow-400"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
