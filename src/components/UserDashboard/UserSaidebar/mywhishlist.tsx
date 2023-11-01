import Link from 'next/link'
import React from 'react'
import {GiLoveMystery}  from "react-icons/gi"
export default function Mywhishlist() {
  return (
    <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  ">
    <div className="flex flex-row">
      <div className="flex  justify-center items-center text-black  px-2 ml-2 text-lg  font-bold leading-loose capitalize">
        <span className="mr-2">
          <GiLoveMystery/>
        </span>{" "}
      <Link href="/user/dashbord/wishlist">
       <h4>My  Wishlist</h4></Link> 
      </div>
    </div>
   
  </div>
  )
}
