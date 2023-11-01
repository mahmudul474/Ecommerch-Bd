import React from 'react'

export default function ChangePasswordComponent() {
  return (
  
    <div className="bg-gray-100 p-5 mx-5  rounded ">
      <div>
        <h2 className="text-lg font-semibold  capitalize">Change Password
</h2>
      </div>

      <form className="py-5">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="curentpassword"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
            Current Password

            </label>
            <input
              type="password"
              id="curentpassword"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder="enter your current password"
              required
            />
          </div>
          <div>
            <label
              htmlFor="newpassword"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
            New Password
            </label>
            <input
              type="password"
              id="newpassword"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder="enter new password"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="retypepassword"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
            Retype Password
 
            </label>
            <input
              type="password"
              id="retypepassword"
              className="bg-gray-50 border  border-primary text-gray-900 text-sm rounded-lg    block w-full p-2.5      "
              placeholder="Repeat Password"
              pattern="*******"
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
  )
}
