import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ products }: any) {
  const productData = products?.data?.data;
 


  return (
    <>
      {productData.map((product: any) => (
        <>
          <div className=" border-gray-100  ">
            <div className="relative h-[200px]  ">
              <Image
                width={100}
                height={100}
                src={product?.thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />
            </div>
            <div className="relative  border-gray-100 bg-white p-2">
              <h3 className="mt-4  capitalize text-lg font-medium text-gray-900">
                {product?.name}
              </h3>

              <p className="mt-1.5 text-sm text-gray-700"> </p>
            </div>
           
           <Link   href={`/product/${product?.slug}`}>
            <button className="  w-full  bg-red-500 border border-primary rounded text-black bg-primary p-3 text-sm font-medium transition hover:scale-105">
              View Dettails
            </button></Link>
          </div>
        </>
      ))}
    </>
  );
}
