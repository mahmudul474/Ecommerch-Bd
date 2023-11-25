

import { useGetAllOficeCategoryQuery, useGetCategoryBySlugNameQuery } from "@/redux/api/category/categorySlice";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

const OfficeFurniture = () => {
 
  const { data, isLoading, isError } = useGetCategoryBySlugNameQuery("office");
  const categoryData = data?.data?.subCategories;

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
    <div className="my-10">
      <div className="w-full m-auto  my-  text-center">
        <h2 className="text-3xl capitalize">Choice Office Furniture</h2>
        <p>
          Selecting office furniture involves balancing style, functionality,
          and comfort to create an ideal <br /> workspace conducive to
          productivity and professionalism.
        </p>
      </div>
      <Slider {...settings}>
        {categoryData &&
          categoryData.map((category: any) => (
            <Link
            className="conteiner mx-auto  my-6 px-2"
              key={category._id}
              href={`/products/${category.slug.toLowerCase()}`}
            >
              <>
                <div className="flex border border-gray-200  shadow-xl justify-center   items-center flex-col">
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
                    <h2 className="capitalize">{category.name}</h2>
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
              </>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default OfficeFurniture;
