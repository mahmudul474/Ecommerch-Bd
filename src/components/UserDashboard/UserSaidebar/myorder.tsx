import Link from 'next/link'
import React from 'react'
import { MdSell } from 'react-icons/md'

export default function Myorder() {
  return (
    <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  ">
    <div className="flex flex-row">
      <div className="flex  justify-center items-center text-black  px-2 ml-2 text-lg  font-bold leading-loose capitalize">
        <span className="mr-2">
          <MdSell/>
        </span>{" "}
       <Link href="/user/dashbord/order"> <h4>My Order History</h4></Link>
      </div>
    </div>
    <div className="px-4  my-2 ">
      <Link href="/user/dashbord/order">
        <p className="capitalize  ">My  Orders</p>
      </Link>
      <Link href="/user/dashbord/review">
        <p className="capitalize  ">My Riviews</p>
      </Link>
       
    </div>
  </div>
  )
}
