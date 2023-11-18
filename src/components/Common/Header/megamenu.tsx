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
              label: "Latest",
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
        { label: "Service ", link: "/service2" },
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
                    className="p-6 mega-menu     mb-16 sm:mb-0 shadow-xl bg-gray-400"
                  >
                    <div className="container mx-auto w-full grid grid-rows-1 lg:grid-cols-4 md: grid-cols-3 mx-2">
                      {item.subMenu.map((subItem: any, subIndex: number) => (
                        <ul className="px-4 w-full   border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                          <h3 className="font-bold text-xl text-white text-bold mb-2"></h3>
                          <li
                              className="block p-3 text-xl capitalize  font-bold hover:bg-teal-900 text-gray-300 hover:text-white"
                            >
                              {subItem.label}
                        
                          </li>
                          {subItem?.category &&
                            subItem?.category.length > 0 &&
                            subItem?.category.map((cat: any) => (
                              <li
                                  className="block p-3 hover:bg-teal-900 text-gray-300 hover:text-white"
                                >
                                  {cat.label}
                             
                              </li>
                            ))}
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
