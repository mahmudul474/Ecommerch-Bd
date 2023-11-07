import Image from "next/image";
import React from "react";

export default function WhyDreamTuch() {
  return (
    <div className="mt-10  px-4 py-5 bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex justify-center items-center">
        <h2 className="text-[24px] font-semibold">why Dream tuch </h2>
      </div>

      <div className="grid  my-10 grid-cols-1  gap-10  md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center items-center pb-10">
            <Image
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/customer_care.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              CUSTOMER CARE
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Dream tuch has dedicated customer care service.
            </span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center  items-center pb-10">
            <Image
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/delivery.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              HOME DELIVERY
            </h5>
            <span className="text-sm text-center text-gray-500 dark:text-gray-400">
              Dream Tuch provide fastest home delivery all over Bangladesh.
            </span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center items-center pb-10">
            <Image
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/easy_payment.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              EASY PAYMENT
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              All kind of e-payment available for online order.
            </span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center items-center pb-10">
            <Image 
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/after_sales.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              AFTER SALES SERVICE
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              OTOBI dedicated team available for your service 24/7.
            </span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center items-center pb-10">
            <Image
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/warranty.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              ONE YEAR WARRANTY
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              OTOBI provide one year service warranty for all Products. See More
            </span>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col mt-3 text-center items-center pb-10">
            <Image
            width={24}
            height={24}
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="http://otobi.com/images/after_sales.png"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              AFTER SALES SERVICE
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              OTOBI dedicated team available for your service 24/7.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
