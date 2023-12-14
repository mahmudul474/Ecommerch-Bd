import React from "react";
import { BiEditAlt } from "react-icons/bi";
import OrderCard from "./orderCard";
import PrivateRoute from "../PrivateRoute";

export default function Usedashbord() {
  return (
   
      <div className=" pt-3 px-3">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <div className=" w-full rounded-xl  border border-gray-200 bg-white text-black">
            <div className="card-body">
              <div className="flex  justify-between  items-center">
                <h4 className="font-semibold text-lg">Personal Profile</h4>
                <h2 className="flex justify-center cursor-pointer text-primary items-center ">
                  <span>
                    <BiEditAlt></BiEditAlt>
                  </span>{" "}
                  Edit
                </h2>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Russell Ahmed</p>
                <p>example@mail.com</p>
                <p>(+88)01456-789</p>
              </div>
            </div>
          </div>
          <div className=" w-full  rounded-xl  border border-gray-200 bg-white  text-black">
            <div className="card-body">
              <div className="flex  justify-between  items-center">
                <h4 className="font-semibold text-lg">Shipping Address</h4>
                <h2 className="flex justify-center cursor-pointer text-primary items-center ">
                  <span>
                    <BiEditAlt></BiEditAlt>
                  </span>{" "}
                  Edit
                </h2>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Bosila bridge </p>
                <p> mohammod pur Dhaka</p>
                <p>(+88)01456-789</p>
              </div>
            </div>
          </div>
          <div className=" w-full rounded-xl  border border-gray-200 bg-white text-black">
            <div className="card-body">
              <div className="flex  justify-between  items-center">
                <h4 className="font-semibold text-lg">Billing Address</h4>
                <h2 className="flex justify-center cursor-pointer text-primary items-center ">
                  <span>
                    <BiEditAlt></BiEditAlt>
                  </span>{" "}
                  Edit
                </h2>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Rampura Dhaka</p>
                <p>banani c block </p>
                <p>(+88)01456-789</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h1 className="text-lg font-semibold">Recent orders </h1>

          <div>
            <OrderCard />
          </div>
        </div>
      </div>
  
  );
}
