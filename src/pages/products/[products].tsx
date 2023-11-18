import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LoadingSpinner from "@/components/shared/LoadingSpinner/LoadingSpinner";
import {
  useGetAllProudctCategoryNameQuery,
  useGetFilteredAndSortedProductsQuery,
  useGetFilteredByPriceAndSortedProductsQuery,
  useGetFilteredByPriceProductsQuery,
} from "@/redux/api/ProductApi/products";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import Layout from "@/components/Layots/RootLayot";
import Image from "next/image";
import {
  useGetAllCategoryBySlugQuery,
  useGetAllCategoryQuery,
} from "@/redux/api/CategoryApi/category";
import ProductCard from "@/components/ProductsCard/productCard";
import { number } from "yup";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes: any[]): any {
  return classes.filter(Boolean).join(" ");
}

export default function AllProducts() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const router = useRouter();
  const { products } = router.query;

  const [selectedOption, setSelectedOption] = useState<any>(null);
  const handleOptionClick = (categoryName: any) => {
    setSelectedOption(categoryName);
    const productUrl = `/products/${categoryName.name.toLowerCase()}`;
    router.push(productUrl);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sortBy, setSortBy] = useState("name");

  const handleMinPriceChange = (event: any) => {
    const newMinPrice = parseInt(event.target.value, 10);
    if (!isNaN(newMinPrice) && newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
    }
  };

  const handleMaxPriceChange = (event: any) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    if (!isNaN(newMaxPrice) && newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
    }
  };

  const {
    data: defaultProducts,
    isLoading,
    isError,
  } = useGetAllProudctCategoryNameQuery(products);

  //category loaded
  const { data: categoryData } = useGetAllCategoryBySlugQuery(products);
  const categories = categoryData?.data?.categories;

  const filters = [
    {
      id: "category",
      name: "Category",
      options: categories,
    },
  ];

  const { data: filteredProducts } = useGetFilteredAndSortedProductsQuery({
    sortBy,
  });

  const { data: filteredByPriceProducts } = useGetFilteredByPriceProductsQuery({
    minPrice,
    maxPrice,
  });

  const { data: filteredByPriceAndSortedProducts } =
    useGetFilteredByPriceAndSortedProductsQuery({
      sortBy,
    });

  useEffect(() => {
    setSortBy("name"); // Set the default sorting order
  }, []);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only"> Categories</h3>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map(
                                  (option: any, optionIdx: number) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <label
                                        key={optionIdx}
                                        htmlFor={`filter-${option.id}`}
                                        className={`ml-3 capitalize text-sm  cursor-pointer text-gray-600 ${
                                          selectedOption === option
                                            ? "bg-gray-400 w-full p-3"
                                            : ""
                                        }`}
                                        onClick={() =>
                                          handleOptionClick(option)
                                        }
                                      >
                                        {option.name}
                                      </label>
                                    </div>
                                  )
                                )}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}

                    <div className="p-4 border border-gray-300 rounded shadow-lg">
                      <h2 className="text-lg font-semibold">Filter by Price</h2>
                      <div className="flex items-center flex-col">
                        <input
                          id="min-price"
                          type="number"
                          min="0"
                          max={maxPrice}
                          onChange={handleMinPriceChange}
                          className="w-32 p-2 border border-gray-300 rounded text-center"
                        />
                        <span className="text-gray-500">TO</span>
                        <input
                          id="max-price"
                          type="number"
                          min={minPrice}
                          max="100"
                          onChange={handleMaxPriceChange}
                          className="w-32 p-2 border border-gray-300 rounded text-center"
                        />
                      </div>
                      {/* Display filtered results here */}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 capitalize">
              {products}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions?.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className=" grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="   hidden lg:block lg:col-span-1">
                <div className="w-full">
                <details
              className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Price </span>

                <span className="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700">
                    The highest price is $600
                  </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      className="flex items-center gap-2"
                    >
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

                </div>

                {filters?.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section?.options?.map(
                              (option: any, optionIdx: number) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <label
                                    key={optionIdx}
                                    htmlFor={`filter-${option.id}`}
                                    className={`ml-3 capitalize text-sm text-gray-600 cursor-pointer ${
                                      selectedOption === option
                                        ? "bg-gray-400 w-full p-3"
                                        : ""
                                    }`}
                                    onClick={() => handleOptionClick(option)}
                                  >
                                    {option.name}
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className=" lg:col-span-4 col-span-5  grid  w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
                {" "}
                <ProductCard products={defaultProducts}></ProductCard>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

AllProducts.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
