import { useGetLatestProuctQuery } from "@/redux/api/ProductApi/products";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; 
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
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
    {data && data?.data && data?.data?.data && data?.data?.data?.length > 0 && (
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
      <div key={product?._id} className="group relative block overflow-hidden m-5">
      <div className="relative h-[250px] sm:h-[250px]">
<Image
  src={product?.thumbnail}
  width={250}
  height={250}
  style={{ objectFit: "contain", width: "100%", height: "100%" }}
  alt="productimg"
/>

<div className="absolute flex justify-center items-center bg-white inset-0 w-full opacity-0 group-hover:opacity-100">
  <span className="p-2 text-xl"><BsFillCartPlusFill /></span>
</div>
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
      </div>
    ))}
  </Carousel>
 
)}

  
  </div>
  );
}
