import {AiOutlineBars} from "react-icons/ai"
export default function User({handleSidebarOpen}:any) {
  return (
    <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm">
      <div className="flex justify-between items-center ">
      <div className="flex ">
      <img
          className="object-cover w-16 h-16 border-2 border-gray-300 rounded-full"
          alt="Noob master's avatar"
          src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
        />
        <div className="flex-col mt-1">
          <div className="flex items-center flex-1 px-4 font-medium leading-tight">
            Hello,
          </div>
          <div className="flex-1 text-black  px-2 ml-2 text-lg  font-bold leading-loose capitalize">
            jone dhoe
          </div>
        </div>
       
      </div>


      <div className=" p-5  lg:hidden   ">
          <span onClick={handleSidebarOpen} className="text-3xl text-primary"><AiOutlineBars></AiOutlineBars></span>
        </div>

      </div>
    </div>
  );
}
