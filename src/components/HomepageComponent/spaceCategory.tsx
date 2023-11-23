

import { useGetCategoryBySlugNameQuery, useGetSpaceCategoryQuery } from "@/redux/api/category/categorySlice";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

const SpaceCategory = () => {
  const { data, isLoading, isError } = useGetCategoryBySlugNameQuery("space");

  const categoryData = data && data?.data?.subCategories;
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
                href={`/products/${category?.slug.toLowerCase()}`}
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
