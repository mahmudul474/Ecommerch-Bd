import { AiOutlineDelete } from "react-icons/ai";

export default function WishlistCard() {
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center">
        <div className="flex  ">
          <img
            className="h-24 w-24"
            src="https://themes.programmingkit.xyz/rafcart/assets/images/x-box.png"
            alt="product img "
          />
          <div className="ml-1">
            <h2 className="text-lg  font-semibold">
              Xbox One Wireless Controll
            </h2>
            <h4 className="text-lg  ">Availability: In Stock</h4>
          </div>
        </div>
        <div className="flex  m-auto  justify-end items-center">
          <h2 className="text-lg tex-center font-semibold">Price</h2>
          <h4 className="text-lg   ">$ 5555</h4>
        </div>
        <div className="flex justify-center space-x-3 items-center  m-auto">
          <button className="btn     bg-transparent hover:bg-primary  border  border-primary ">
            Add to Cart
          </button>
           
            <span   className="text-2xl cursor-pointer text-primary">
              <AiOutlineDelete></AiOutlineDelete>
            </span>
           
         
        </div>
      </div>
    </div>
  );
}
