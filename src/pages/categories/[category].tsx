import Layout from "@/components/Layots/RootLayot";
import LoadingSpinner from "@/components/shared/LoadingSpinner/LoadingSpinner";
import { useGetAllCategoryBySlugQuery } from "@/redux/api/CategoryApi/category";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  const { data, isLoading, isError } = useGetAllCategoryBySlugQuery(category);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex  my-5 justify-center items-center">
        <h2 className="text-3xl   capitalize  font-semibold">
          All {category} Collections
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data?.data?.categories?.map((item: any) => (
          <>
            
           
           <Link href={`/products/${item.name.toLowerCase()}`}>
           
            <div className=" cursor-pointer shadow-md flex  justify-center flex-col  items-center">
             <div className="w-[300px]  objectFit-cover   h-[300px]">
              <Image
                width={300}
                height={300}
                style={{ width: "100%", height: "100%" }}
                src={item.icon}
                className="w-full  transition duration-300 ease-in-out hover:scale-110"
                alt="category "
              /></div>
              <div className="flex justify-center items-center my-2">
                <h3 className="text-xl capitalize font-semibold">{item.name}</h3>
              </div>
            </div>

            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

Category.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
