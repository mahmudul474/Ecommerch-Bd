import Layout from "@/components/Layots/RootLayot";
import { useGetSearchProductsQuery } from "@/redux/api/products/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Products() {
  const router = useRouter();
  const { product } = router.query;
  const { data, isLoading, isError } = useGetSearchProductsQuery(product);


  if(isLoading){
    return <div>Loading...</div>;
  }

  return (
    <>

    <div className="">
      <h1 className="text-center text-xl font-bold  my-9 capitalize">Search Result {product}</h1>
      <div className="grid my-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data &&
          data?.data?.data.map((product: any) => (
            <div  key={product?._id} className="mx-4">
              <div
                key={product?._id}
                className="border  border-gray-200 px-3 rounded-md bg-gray-50 dark:border-gray-900 rounded-b-md dark:bg-gray-900"
              >
                <div className="relative ">
                  <a href="#" className="">
                    <img
                      src={product?.thumbnail}
                      alt=""
                      className="object-contain w-full mx-auto h-96 lg:h-64"
                    />
                  </a>
                  <div className="flex justify-center ">
                    <div className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-red-400 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-4 h-4 bi bi-cart3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 ">
                  <h3 className="mb-3 text-xl font-medium text-center dark:text-gray-400">
                    <a href="#"> {product?.name}</a>
                  </h3>
                  <p className="mb-3 text-lg font-medium text-center text-gray-600 dark:text-gray-400">
                    <span className="text-orange-500 dark:text-gray-300">
                      ৳ {product?.price}
                    </span>
                  </p>

                  <Link
                    href={`/product/${product.slug}`}
                    className="flex justify-center px-4 py-2 text-black  hover:border-none border border-gray-500 rounded-full dark:border-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900"
                  >
                    View Dettails
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </>
  );
}

Products.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
