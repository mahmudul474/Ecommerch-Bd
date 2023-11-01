import MyAcount from "@/components/UserDashboard/UserSaidebar/acount";
import Logout from "@/components/UserDashboard/UserSaidebar/logout";
import Myorder from "@/components/UserDashboard/UserSaidebar/myorder";
import Mywhishlist from "@/components/UserDashboard/UserSaidebar/mywhishlist";
import User from "@/components/UserDashboard/UserSaidebar/user";
 
import React, { useState } from 'react';


const UserLayot = ({ children }: any) => {

  const [isopenSidebar, setIsopenSidebar] = useState<boolean>(false);



  const handleSidebarOpen = () => {
    setIsopenSidebar(!isopenSidebar);
  };
  const handleCloseSidebar = () => {
    setIsopenSidebar(false); // Close the sidebar
  };


  return (
    <>
      <div className="flex  flex-col lg:flex-row ">
        <div className="   w-full    lg:w-[25%]  ">
          <User  handleSidebarOpen={handleSidebarOpen}/>
          <div className=" hidden lg:block">
            <MyAcount />
            <Myorder />
            <Mywhishlist />
            <Logout></Logout>
          </div>
        </div>
        <div className="w-full lg:w-[70%]   ">
          <main>{children}</main>
        </div>
      </div>


{isopenSidebar && <div
onClick={handleCloseSidebar}
      className="sidebar lg:hidden    fixed top-24 bottom-0 lg:left-0 p-2 w-[70%] overflow-y-auto text-center  bg-slate-100"
  >
        <MyAcount />
            <Myorder />
            <Mywhishlist />
            <Logout></Logout>
      </div>}
      
    </>
  );
};

export default UserLayot;
