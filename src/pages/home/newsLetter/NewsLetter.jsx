import React from "react";
import { BsEnvelopePaperHeart } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="bg-blue-gray-50 bg-opacity-50 rounded-lg p-2">
      <div>
        <div className="font-extrabold uppercase text-center md:text-start mb-5  border-b  pb-4  flex space-x-4 items-center">
          <div className="bg-[#fc82bd] drop-shadow shadow-md rounded-full w-3 h-3"></div>
          <h4>NEWSLETTER</h4>
        </div>
      </div>
      <div>
            <div className="flex flex-col justify-center items-center">
                <BsEnvelopePaperHeart className="text-4xl text-[#fc82bd]" />
                <h4 className="text-blue-gray-600 font-semibold">
                Sign Up & Get News
                </h4>
            </div>
      </div>
    </div>
  );
};

export default NewsLetter;
