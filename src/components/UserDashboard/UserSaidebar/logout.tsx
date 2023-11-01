import React from "react";
import { BiLogInCircle } from "react-icons/bi";

export default function Logout() {
  return (
    <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  ">
      <div className="flex flex-row">
        <div className="flex text-red-400 justify-center items-center   px-2 ml-2 text-lg  font-bold leading-loose capitalize">
          <span className="mr-2">
            <BiLogInCircle />
          </span>{" "}
          <h4> Logout</h4>
        </div>
      </div>
    </div>
  );
}
