import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useGetallCategoryQuery } from "@/redux/api/category/categorySlice";
import Image from "next/image";
import styles from "../../styles/homepageAllcategory.module.css";
import Link from "next/link";

export default function HomePageAllCategory() {
  const { data, isLoading, isError } = useGetallCategoryQuery(undefined);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,

          slidesToShow: 4,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          autoplay: true,
          infinite: true,
          slidesToScroll: 2,
          initialSlide: 4,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          Infinity: true,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className="container   m-auto my-7 lg:px-3">
      <h2 className="text-3xl text-center font-bold ">
        {" "}
        Explore Oure All Category
      </h2>
      <p className="text-center mt-3">
        Discover a myriad of meticulously crafted furniture options across{" "}
        <br></br>
        categories at Dream Furniture, promising style and quality for every
        room
      </p>

    <div className="my-10">
    <Slider {...settings}>
        {data?.data?.categories.map((category: any, index: number) => (
          <Link key={index} href={`/categories/${category.slug.toLowerCase()}`}>
            <div className="w-full rounded-md max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  flex flex-col justify-center  items-center">
              <a href="#">
                <img
                  className="    h-36 object-cover"
                  src={category?.icon}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {category?.name}
                  </h5>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
    </div>
  );
}
