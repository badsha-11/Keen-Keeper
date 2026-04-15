import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div className="text-center p-4 bg-green-800">
      <div className="w-11/12 mx-auto">
        {/* header */}
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>
          <p className="mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <h2 className="text-xl font-semibold ">Social Links</h2>
          {/* sosail links */}
          <div className="flex items-center justify-center gap-4 my-4">
            {/** sosile links */}
            <div className="bg-white text-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 cursor-pointer">
              <IoLogoInstagram />
            </div>
            <div className="bg-white text-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer">
              <FaSquareFacebook />
            </div>
            <div className="bg-white text-black w-10 h-10 flex justify-center items-center rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
          <hr className="border border-gray-400/50 my-10" />
        </div>
        {/* body */}
        <div className="flex justify-between items-center text-gray-400">
          <div>
            <h2>© 2026 KeenKeeper. All rights reserved.</h2>
          </div>
          <div className="flex gap-6">
            <h2>Privacy Policy</h2>
            <h2> Terms of Service</h2>
            <h2> Cookies</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
