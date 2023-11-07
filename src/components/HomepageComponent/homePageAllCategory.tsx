import Head from "next/head";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/homepageAllcategory.module.css";
import { ICategoryInterface } from "@/Types/category";
import Link from "next/link";
import LoadingSpinner from "@/components/shared/LoadingSpinner/LoadingSpinner";
import { useGetAllCategoryQuery } from "@/redux/api/CategoryApi/category";

export default function HomePageAllCategory({
  swipeable,
  draggable,
  showDots,
  ssr,
  infinite,
  deviceType,
}: any) {
  const { data, isLoading, isError } = useGetAllCategoryQuery(undefined);

  // Define different settings for smaller screens

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className=" my-12 px-8 bg-white">
      <div className="flex  justify-center items-center  flex-col">
        <h1
          className={` ${styles.customHeading} text-2xl  font-semibold capitalize`}
        >
          Popular Furniture By Choice
        </h1>
        <p className="text-lg  font-sem">
          Categories our customers love to check out.
        </p>
      </div>
      {data && data.data && data.data.categories && data.data.categories.length > 0 && (
  <Carousel
  swipeable={swipeable}
  draggable={draggable}
  showDots={showDots}
  responsive={responsive}
  ssr={ssr}
  infinite={infinite}
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
{data?.data?.categories.map((category:any, index:number) => (
  <Link href={`/products/${category.name.toLowerCase()}`}>

 <div key={category?._id} className={styles.card}>
    <p   className={styles.imgContainer}>
      <Image
        layout="responsive"
        className=" my-4"
        width={100}
        height={100}
        style={{width:"100%", height:"100%"   , objectFit:"contain"}}
        alt="category-icon"
        src={`${category?.icon}`}
      />
    </p>
    <div className="px-5 pb-5">
      <a  >
        <h5 className={styles.title}>{category?.name}</h5>
      </a>
    </div>
  </div></Link>
  ))}
  
</Carousel>
)}
      
    </div>
  );
}
