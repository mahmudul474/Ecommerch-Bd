import Layout from "@/components/Layots/RootLayot";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  
 
} from "@/redux/freaturs/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ShoppingCart() {
  const cart = useSelector((state: { cart: [] }) => state.cart);

  const dispatch = useDispatch();
 

 


  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrement = (id: any) => {
    dispatch(incrementQuantity(id));
    console.log(id);
  };

  const handleDecrement = (id: any) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const  totalItems=cart.reduce((acc, item:any) => acc + item.quantity, 0)
   
 const TotalPrice= cart.reduce((acc, item:any) => acc + item.totalPrice, 0)


  return (
    <>
      <div className="flex items-center bg-stone-200  font-poppins dark:bg-gray-700 ">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="p-8 bg-gray-50 dark:bg-gray-800">
            <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">
              Shopping Cart
            </h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
                <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                  <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                      Product name
                    </h2>
                  </div>
                  <div className="hidden px-4 lg:block lg:w-2/12">
                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                       Remove
                    </h2>
                  </div>
                  <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                      Quantity
                    </h2>
                  </div>
                  <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                    <h2 className="font-bold text-gray-500 dark:text-gray-400">
                      {" "}
                      Subtotal
                    </h2>
                  </div>
                </div>
                <div className="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                  {cart &&
                    cart?.map((item:any) => (
                      <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                        <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                          <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full px-4 mb-3 md:w-1/3">
                              <div className="w-full h-96 md:h-24 md:w-24">
                                <img
                                  src={item?.thumbnail}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                            <div className="w-2/3 px-4">
                              <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                                {item?.name}
                              </h2>
                              <p className="text-gray-500 dark:text-gray-400 ">
                              ৳{item?.price}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-2/12">
                          <p className="text-lg font-bold text-black dark:text-gray-400">
                   <button
                      onClick={()=>{handleRemove(item?._id)}}
                   
                   className="btn   border px-4 py-2  rounded-md border-red-500 hover:bg-red-400 text-black hover:text-white">Remove</button>
                          </p>
                        </div>
                        <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                          <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                            <button
                              onClick={() => {
                                handleDecrement(item._id);
                              }}
                              className="py-2 hover:text-gray-700 dark:text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-dash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                              </svg>
                            </button>
                            <input
                              disabled
                              value={item?.quantity}
                              type="number"
                              className=" text-center w-16  py-4  border-0 rounded-md dark:bg-gray-800 bg-gray-50 dark:text-gray-400 md:text-right"
                              placeholder="1"
                            />
                            <button
                              onClick={() => handleIncrement(item?._id)}
                              className="py-2 hover:text-gray-700 dark:text-gray-400"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-plus"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                          <p className="text-lg font-bold text-black dark:text-gray-400">
                            ৳ {item?.totalPrice}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-full px-4 xl:w-4/12">
                <div className="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8">
                  <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">
                    Order Summary
                  </h2>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                    <span className="text-gray-700 dark:text-gray-400">
                      Total Items
                    </span>
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400 ">{ totalItems}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pb-4 mb-4 ">
                    <span className="text-gray-700 dark:text-gray-400">
                     Total Price
                    </span>
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-400">
                    ৳ {TotalPrice}
                    </span>
                  </div>

                  <div className="flex items-center justify-between ">
                    <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-black rounded-md hover:bg-blue-600">
                        Place order 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

ShoppingCart.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
