
import React from "react";
import styles from "@/styles/spaceCategory.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetALLOfficsCategoryQuery } from "@/redux/api/CategoryApi/category";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import Link from "next/link";




export default function OfficeFurniture({
  swipeable,
  draggable,
  showDots,
  ssr,
  infinite,
  deviceType,
}: any) {
  const { data, error, isLoading } = useGetALLOfficsCategoryQuery("office");
 

const categoryData=data?.data?.categories



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

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }



  return (
    <div className="bg-[#f6f6f6] py-8">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col  justify-center items-center   ">
          <h1 className={styles.customHeading}>Office Furniture Categories</h1>
          <p>Every Space has its unique needs.</p>
        </div>
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
{categoryData.map((category:any, index:number) => (
       
       
       <Link key={category._id}  href={`/products/${category.name.toLowerCase()}`}> 
       <>
       <div   className="flex justify-center   items-center flex-col">
       <div className="w-[300px]  h-[300px] ">
  <Image
    width={300}
    height={300}
    alt="servicIMg"
    loading="lazy"
    style={{ objectFit: "contain", width: "100%", height: "100%" }}
    src={category.icon}
  />
</div>

         <div className="flex my-3 flex-col justify-center items-center">
           <h2>{category.name}</h2>
           <button className="explore-btn  hover:text-slate-700  text-red-600 flex items-center justify-center">
             <span className="">Explore Now</span>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               className="w-5 h-5 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-40"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M9 5l7 7-7 7"
               />
             </svg>
           </button>
         </div>
       </div>
     </></Link>
        
        ))}
        
      </Carousel>
      
        
      </div>
    </div>
  );
}
