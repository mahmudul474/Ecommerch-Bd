import React from "react";

export default function AddressComponent() {
  return (
    <div className="bg-gray-100 p-5 mx-5  rounded ">
      <div>
        <h2 className="text-lg font-semibold  capitalize">Manage Address</h2>
      </div>

      <form className="py-5">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="FullName"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Full Name
            </label>
            <input
              type="text"
              id="FullName"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          <label htmlFor="country" className="text-md font-semibold ">
            Country
            <select className="select select-primary   border-primary w-full ">
              <option disabled selected>
                Bangladesh
              </option>
              <option>Nepal</option>
              <option>Indea</option>
            </select>
          </label>

          <label
            htmlFor="
Region"
            className="text-md font-semibold "
          >
            Region
            <select className="select select-primary   border-primary w-full ">
              <option disabled selected>
                Dhaka
              </option>
              <option>Comilla</option>
              <option>Rangpur</option>
              <option>Barishal</option>
            </select>
          </label>

          <label htmlFor="city" className="text-md font-semibold ">
            City
            <select className="select select-primary   border-primary w-full ">
              <option disabled selected>
                Dhaka noth
              </option>
              <option>Rampura</option>
              <option>Barishal</option>
            </select>
          </label>

          <label htmlFor="Ariya" className="text-md font-semibold ">
            Area
            <select className="select select-primary   border-primary w-full ">
              <option disabled selected>
                Area
              </option>
              <option>Dhaka</option>
              <option>Rampura </option>
              <option>Breaking Ba</option>
              <option>Walking Dead</option>
            </select>
          </label>

          <div className="w-full">
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Addresss
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder=""
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="border px-10 border-primary bg-transparent hover:bg-primary  focus:ring-4  text-black   font-medium rounded-lg text-sm w-full sm:w-auto  py-2.5 text-center    "
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
