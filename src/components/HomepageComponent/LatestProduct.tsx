import { useGetLatestProuctQuery } from "@/redux/api/ProductApi/products";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";
export default function LatestProduct({
  swipeable,
  draggable,
  showDots,
  ssr,
  infinite,
  deviceType,
}: any) {
  const { data, error, isLoading } = useGetLatestProuctQuery("latest");

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="px-4 py-5 mx-auto">
      <h1 className="m-5 text-center text-2xl font-bold">Latest Products</h1>
      {data &&
        data?.data &&
        data?.data?.data &&
        data?.data?.data?.length > 0 && (
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
            {data?.data?.data?.map((product: any) => (
              <div
                key={product?._id}
                className="group relative   cursor-pointer  block overflow-hidden m-5"
              >
                <div className="relative h-[250px] sm:h-[250px]">
                  <Image
                    src={product?.thumbnail}
                    width={250}
                    height={250}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    alt="productimg"
                  />
                </div>

                <div className="relative bg-white pt-3 text-center">
                  <h3 className="text-lg text-gray-black group-hover:underline group-hover:underline-offset-4">
                    {product?.name}
                  </h3>
                  <p className="mt-1.5 font-bold tracking-wide text-gray-900">
                    <span>৳</span>
                    {product?.price}
                  </p>
                </div>
                <Link   href={`/product/${product?.slug}`}> 
                <div className="flex justify-center my-3 items-center ">
                
                  <button
                    type="button"
                    className=" w-full  flex justify-center  items-center 
                    text-center m-auto  bg-transparent  border text-black
                     border-red-500 hover:bg-red-500    
                      font-medium rounded-lg text-sm px-5 py-2.5       "
                  >
                    View Details
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                  
                </div></Link>
              </div>
            ))}
          </Carousel>
        )}
    </div>
  );
}
