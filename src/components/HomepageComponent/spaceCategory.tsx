// import { ISpaceService } from "@/Types/spaceCatefory";
// import React from "react";
// import styles from "@/styles/spaceCategory.module.css";
// import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Link from "next/link";

// export default function SpaceCategory({
//   swipeable,
//   draggable,
//   showDots,
//   ssr,
//   infinite,
//   deviceType,
// }: any) {
//   const SpaceCategory = [
//     {
//       _id: "1",
//       title: "Living",
//       img: "https://hatil.com/sites/default/files/sofa-set_0.jpg",
//     },
//     {
//       _id: "2",
//       title: "Dining",
//       img: "https://hatil.com/sites/default/files/Furniture-Dining-Set_0.jpg",
//     },
//     {
//       _id: "3",
//       title: "Bedroom",
//       img: "https://hatil.com/sites/default/files/Furniture-Bed-Hatil.jpg",
//     },
//     {
//       _id: "4",
//       title: "kitchen",
//       img: "https://hatil.com/sites/default/files/kitchen-cabinet-hatil.jpg",
//     },
//     {
//       _id: "5",
//       title: "Door",
//       img: "https://hatil.com/sites/default/files/door-hatil_0.jpg",
//     },
//     {
//       _id: "6",
//       title: "Office",
//       img: "https://hatil.com/sites/default/files/office-furniture-hatil_0.jpg",
//     },
//   ];

//   return (
//     <div className="bg-[#f6f6f6] py-8">
//       <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
//         <div className="flex flex-col  justify-center items-center   ">
//           <h1 className={styles.customHeading}>Buy Furniture Based on Space</h1>
//           <p>Every Space has its unique needs.</p>
//         </div>

//         {SpaceCategory && SpaceCategory?.length > 0 && (
//           <Carousel
//             swipeable={swipeable}
//             draggable={draggable}
//             showDots={showDots}
//             responsive={responsive}
//             ssr={ssr}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={5000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             transitionDuration={500}
//             containerClass="carousel-container"
//             deviceType={deviceType}
//             dotListClass="custom-dot-list-style"
//             itemClass="carousel-item-padding-40-px"
//           >
//             {SpaceCategory.map((category: any, index: number) => (
//             <>
//              <Link href={`/categories/${category?.title.toLowerCase()}`}   as={`/categories/${category?.title.toLowerCase()}`}>
//               <div
//                 key={category._id}
//                 className="flex justify-center  cursor-pointer items-center flex-col"
//               >
//                 <div className="w-[300px]  h-[300px] ">
//                   <Image
//                     width={300}
//                     height={300}
//                     alt="servicIMg"
//                     loading="lazy"
//                     style={{
//                       objectFit: "contain",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                     src={category.img}
//                   />
//                 </div>

//                 <div className="flex my-3 flex-col justify-center items-center">
//                   <h2>{category?.title}</h2>

// <button className="explore-btn hover:text-slate-700 text-red-600 flex items-center justify-center">
//   <span className="">Explore Now</span>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     className="w-5 h-5 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-40"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M9 5l7 7-7 7"
//     />
//   </svg>
// </button>

//                 </div>
//               </div></Link>
//             </>
//             ))}
//           </Carousel>
//         )}
//       </div>
//     </div>
//   );
// }

import { useGetSpaceCategoryQuery } from "@/redux/api/category/categorySlice";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

const SpaceCategory = () => {
  const { data, isError, isLoading } = useGetSpaceCategoryQuery("space");

  const categoryData = data && data?.data?.categories;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
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
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full  my-5 m-auto text-center">
        {" "}
        <h2 className="text-3xl font-bold mb-2">Find Space Wise Category</h2>
        <p>
          Exploring space-wise categories unveils a universe of planets, moons,<br></br>
          and celestial events like solar flares and eclipses.
        </p>
      </div>
      <Slider {...settings}>
        {categoryData &&
          categoryData?.map((category: any) => (
            <div
              key={category?._id}
              className="border shadow-md shadow-red-100     "
            >
              <Link
                href="/"

                // href={`/categories/${category?.title.toLowerCase()}`}
                // as={`/categories/${category?.title.toLowerCase()}`}
              >
                <div
                  key={category._id}
                  className="flex justify-center  cursor-pointer items-center flex-col"
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
                      src={category.icon}
                    />
                  </div>

                  <div className="flex my-3 flex-col justify-center items-center">
                    <h2>{category?.name}</h2>
<Link href={`/categories/${category?.slug.toLowerCase()}`}>
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
                    </button></Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SpaceCategory;
