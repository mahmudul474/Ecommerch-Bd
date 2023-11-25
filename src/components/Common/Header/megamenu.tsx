import { useGetCategoryBySlugNameQuery } from "@/redux/api/category/categorySlice";
import Link from "next/link";
import React, { useState } from "react";

export default function Megamenu() {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const handleMouseEnter = (index: any) => {
    setShowSubMenu(index);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  const menuItems = [
    {
      label: "Doors",
      subMenu: [
        { label: "Div.  Series", link: "/div-door" },
        { label: "Classic Series", link: "/service2" },
        { label: "Premium Series", link: "/premium-door" },
        { label: "Luxury Series", link: "/luxury-door" },

        { label: "Decoretive Series ", link: "/decorative-door" },
        { label: "Exclusive Series", link: "/exclusive-door" },
        { label: "Plain Series", link: "" },
        { label: "Flush Series", link: "/flush-door" },

        { label: "Glass Series", link: "/service2" },
        { label: "Groove Series", link: "/grove-door" },
        { label: "Double Door Series", link: "/service2" },
        { label: "Cat Door Series", link: "/cat-door" },
      ],
    },
  ];

  return (
    <div className="bg-gray-200  font-sans leading-normal tracking-normal">
      <nav className="relative bg-white border-b-2 border-gray-300 text-gray-900">
        <div className="container mx-auto flex justify-between">
          <ul className="flex pb-3">
            {menuItems?.map((item: any, index: number) => (
              <li className="hoverable hover:bg-gray-400 hover:text-white">
                <p
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="relative block  px-4 text-sm lg:text-base font-bold hover:bg-gray-400 hover:text-white"
                >
                  {item?.label}
                </p>

                {item.subMenu && showSubMenu === index && (
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="p-6 mega-menu     mb-16 sm:mb-0 shadow-xl  bg-white text-black"
                  >
                    <div className="container  w-full grid grid-rows-1 lg:grid-cols-4 md: grid-cols-3 mx-2">
                      {item.subMenu.map((subItem: any, subIndex: number) => (
                        <ul className="px-4 w-full   border-gray-600 border-b sm:border-r lg:border-b-0   first-line: lg:pt-3">
                          <Link href={`/products${subItem.link}`}>
                            <li className="block  text-lg capitalize    text-black cursor-pointer hover:text-yellow-400    ">
                              {subItem.label}
                            </li>
                          </Link>
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
