import { ISpaceService } from "@/Types/spaceCatefory";
import React from "react";
import styles from "@/styles/spaceCategory.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetALLSpacewsieQuery } from "@/redux/api/CategoryApi/category";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import Link from "next/link";

export default function SpaceCategory({
  swipeable,
  draggable,
  showDots,
  ssr,
  infinite,
  deviceType,
}: any) {
  const SpaceCategory = [
    {
      _id: "1",
      title: "Living",
      img: "https://hatil.com/sites/default/files/sofa-set_0.jpg",
    },
    {
      _id: "2",
      title: "Dining",
      img: "https://hatil.com/sites/default/files/Furniture-Dining-Set_0.jpg",
    },
    {
      _id: "3",
      title: "Bedroom",
      img: "https://hatil.com/sites/default/files/Furniture-Bed-Hatil.jpg",
    },
    {
      _id: "4",
      title: "kitchen",
      img: "https://hatil.com/sites/default/files/kitchen-cabinet-hatil.jpg",
    },
    {
      _id: "5",
      title: "Door",
      img: "https://hatil.com/sites/default/files/door-hatil_0.jpg",
    },
    {
      _id: "6",
      title: "Office",
      img: "https://hatil.com/sites/default/files/office-furniture-hatil_0.jpg",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="bg-[#f6f6f6] py-8">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col  justify-center items-center   ">
          <h1 className={styles.customHeading}>Buy Furniture Based on Space</h1>
          <p>Every Space has its unique needs.</p>
        </div>

        {SpaceCategory && SpaceCategory?.length > 0 && (
          <Carousel
            swipeable={swipeable}
            draggable={draggable}
            showDots={showDots}
            responsive={responsive}
            ssr={ssr}
          
            infinite={true}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {SpaceCategory.map((category: any, index: number) => (
              <>
                <div
                  key={category._id}
                  className="flex justify-center   items-center flex-col"
                >
                  <div className="w-[300px]  h-[300px] ">
                    <Image
                      width={300}
                      height={300}
                      alt="servicIMg"
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                      src={category.img}
                    />
                  </div>

                  <div className="flex my-3 flex-col justify-center items-center">
                    <h2>{category?.title}</h2>
                    <Link href={`/categories/${category?.title.toLowerCase()}`}   as={`/categories/${category?.title.toLowerCase()}`}>
  <button className="explore-btn hover:text-slate-700 text-red-600 flex items-center justify-center">
    <span className="">Explore Now</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-40"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</Link>

                  </div>
                </div>
              </>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
