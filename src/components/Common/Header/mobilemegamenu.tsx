import Link from "next/link";
import React, { useState } from "react";




export default function MobaileMegamenu({setSidebarOpen}:any) {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const handleToggle = (index: any) => {
    if (showSubMenu === index) {
      setShowSubMenu(null); // Close the submenu if already open
    } else {
      setShowSubMenu(index); 
      
    }
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
      {
        label: "Living",
      },
      {
        label: "Dining",
      },
      {
        label: "Bedrooms",
      },
      {
        label: "Kitchen",
      },
      {
        label: "Office",
      },
      {
        label: "Table",
      },
      {
        label: "Desk",
      },
      {
        label: "Sofa",
      },
    ];

  return (
    <>
   <aside className="" aria-label="Sidebar">
  <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
    <ul className="space-y-2 font-medium">
      {menuItems?.map((item: any, index: number) => (
        <li key={index}>
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
              {item?.label}
            </span>
            {item.subMenu && (showSubMenu === index ? (
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ))}
          </button>

          {item.subMenu && showSubMenu === index && (
            <ul className="py-2 space-y-2">
              {item.subMenu?.map((subitem: any, subIndex: number) => (
                <li key={subIndex}>
                  <Link  
                  onClick={()=>setSidebarOpen(false)}
                  href={`/products${subitem.link}`}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {subitem?.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
</aside>


    </>
  );
}
