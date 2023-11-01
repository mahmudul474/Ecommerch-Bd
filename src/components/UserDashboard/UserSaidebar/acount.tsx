import Link from "next/link";
import { SiFlathub } from "react-icons/si";

export default function   MyAcount() {
  return (
    <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm  ">
      <div className="flex flex-row">
        <div className="flex  justify-center items-center text-black  px-2 ml-2 text-lg  font-bold leading-loose capitalize">
          <span className="mr-2">
            <SiFlathub />
          </span>{" "}
          <Link href="/user/dashbord"> <h4> Manage My Account</h4></Link> 
        </div>
      </div>
      <div className="px-4  my-2 ">
        <Link href="/user/dashbord/profile">
          <p className="capitalize  ">Profile Information</p>
        </Link>
        <Link href="/user/dashbord/address">
          <p className="capitalize  ">Manage Address</p>
        </Link>
        <Link href="/user/dashbord/password">
          <p className="capitalize  ">Change Password</p>
        </Link>
      </div>
    </div>
  );
}
