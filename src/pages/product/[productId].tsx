import Layout from "@/components/Layots/RootLayot";
import LoadingSpinner from "@/components/shared/LoadingSpinner/LoadingSpinner";
import SubImgSlider from "@/components/shared/SubImgSlider/SubImgSlider";
import { useGetSingelProductQuery } from "@/redux/api/products/productSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ProductDittails() {
  const router = useRouter();
  const { productId } = router.query;

console.log(productId)


  const { data, isLoading, isError } =
    useGetSingelProductQuery(productId);
  const product = data?.data;
console.log(product)
 



  const [subimageUrl, setSubImgUrl] = useState<string>("");
  /// img    slider
  const handleSubimgShow = (subimgUrl: string) => {
    setSubImgUrl(subimgUrl);
  };

  const calculateDiscountedPrice = () => {
    if (product?.discountType === "fixed") {
      return product?.price - product?.discountValue;
    } else if (product?.discountType === "percentage") {
      const discountAmount = (product?.price * product?.discountValue) / 100;
      return product?.price - discountAmount;
    }
    return product?.price;
  };
  const discountPrices = calculateDiscountedPrice();

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    
    <div className="bg-white px-7 ">
      <div className="container grid  py-10 grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="w-full ">
         

          <div className="sticky top-0 z-0 overflow-hidden ">
            <div className="relative  lg:mb-10 h-[450px]">
              {subimageUrl ? (
                <Image  alt="img " width={100} height={100}
                  src={subimageUrl}
                   
                  className="  object-contain  w-full h-full  "
                />
              ) : (
                <Image width={100} height={100}
                  src={product?.thumbnail}
                  alt=""
                  className=" h-full   object-contain  w-full   "
                />
              )}
            </div>
            <SubImgSlider
                  handleSubimgShow={handleSubimgShow}
                  images={product&& product.images}
                ></SubImgSlider>
          </div>
        </div>
        <div className="w-full ">
          <h2 className="text-3xl font-medium  text-black uppercase mb-3">
            {product?.name}
          </h2>

          <div className="space-y-2">
            <p className="text-grey-800 font-semibold">
              <span className="text-gray-700 font-semibold space-x-2">
                Avilable :{" "}
              </span>
              <span className="text-green-800"> In Stock</span>
            </p>

            <p className="text-grey-800 font-semibold">
              <span className="text-gray-700 font-semibold space-x-2">
                Category:
              </span>
              <span className="text-black  capitalize">
                {product?.category?.name}
              </span>
            </p>
          </div>

          <p className="leading-relaxed text-black ">
            <div
              dangerouslySetInnerHTML={{ __html: product?.short_description }}
            />
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            {/* <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div> */}
            {/* <div className="flex ml-6 bg-white items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none bg-white text-black  focus:border-red-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
          <div className="flex items-center border-gray-100 text-black text-xl py-3">
            {" "}
            <span className="text-lg font-semibold mr-2">QTY:</span>
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              -{" "}
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value="2"
              min="1"
            />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              +{" "}
            </span>
          </div>
          <div className="flex">
            <span className="title-font flex   font-medium text-2xl text-gray-900">
              ৳
              {product?.discountType && product.discountAmount ? (
                <p>
                  {" "}
                  <s>{product?.price}</s> <span>{discountPrices}</span>
                </p>
              ) : (
                <p>{product?.price}</p>
              )}
            </span>
          </div>
          <div className="flex justify-start  py-5 items-center">
            <button className=" rounded p-3 text-black    bg-red-500  border-0 inline-flex items-center justify-center  border-primary   hover:text-primary hover:bg-transparent  ">
              Add To Cart
            </button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="border-b  border-gray-200 font-roboto text-gray-800 font-medium">
          Product details
        </h3>

        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDittails.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};


 
