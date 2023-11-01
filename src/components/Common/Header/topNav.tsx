import { HiOutlineMail } from "react-icons/hi";
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaPinterest, FaVimeoSquare } from "react-icons/fa";
import { BiLogoFlickrSquare } from "react-icons/bi";

export default function TopNav() {
  return (
    <div className="bg-[#e8e8e8]   p-1 border-b-slate-500 text-black ">
      <div className="flex  lg:px-6 px-2 m-auto justify-between items-center">
        <div>
          <ul>
            <li className="flex items-center justify-end ">
              <span className="text-red-400 mt-1 mr-1">
                <HiOutlineMail></HiOutlineMail>
              </span>
              info@dreamtouch-bd.com
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li className="mr-2">
              <a href="#" target="_black" className="text-[#3b5998]">
                <BiLogoFacebookCircle></BiLogoFacebookCircle>
              </a>
            </li>

            <li className="mr-2">
              <a href="#" target="_black" className="text-[#FCAF45]">
                <BiLogoInstagramAlt></BiLogoInstagramAlt>
              </a>
            </li>
            <li className="mr-2">
              <a href="#" target="_black" className="text-[#CD201F]">
                <BsYoutube></BsYoutube>
              </a>
            </li>
            <li className="mr-2">
              <a href="#" target="_black" className="text-[#E60023]">
                <FaPinterest></FaPinterest>
              </a>
            </li>
            <li className="mr-2">
              <a href="#" target="_black" className="text-[#0063dc]">
                <BiLogoFlickrSquare></BiLogoFlickrSquare>
              </a>
            </li>
            <li className="mr-2">
              <a href="#" target="_black" className="text-[#86c9ef]">
                <FaVimeoSquare></FaVimeoSquare>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
