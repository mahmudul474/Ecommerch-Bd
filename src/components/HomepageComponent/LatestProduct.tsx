import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { useGetLatestProductQuery } from "@/redux/api/products/productSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/freaturs/Cart/cartSlice";
import { toast } from "react-toastify";
import Link from "next/link";

 

const LatestProduct = () => {
  const { data, isLoading, isError } = useGetLatestProductQuery("latest");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          autoplaySpeed: 5000,
          Infinity: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const dispatch = useDispatch();

 
 

 const  handleAddtocart=(product:any)=>{
  dispatch(addToCart(product));
 }

  return (
    <div className="container px-3 my-5  m-auto overflow-hidden">
      <div className="my-4">
        <h2 className="text-3xl text-center font-bold"> Latest Products </h2>
        <p className="text-center">
          Discover the freshest additions in the world of furniture with Niche{" "}
          <br></br> Furniture's latest collection
        </p>
      </div>
      <Slider {...settings}>
        {data &&
          [...data?.data?.data].reverse().map((product: any) => (
            <div className="mx-4">
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
                    <div
                      onClick={()=> handleAddtocart(product)}
                      className="absolute z-10 flex items-center justify-center p-2 -mt-6 text-center text-red-400 border border-orange-400 rounded-full shadow-xl cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900 hover:text-gray-50 hover:bg-orange-600 w-11 h-11 "
                    >
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
      </Slider>
    </div>
  );
};

export default LatestProduct;
