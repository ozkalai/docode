import React from "react";
import Image from "next/image";

function Navigation() {
  return (
    <div className="text-gray-600 bg-white w-full flex justify-center text-align-center items-center border-b-2 mx-auto text-lg md:text-lg lg:text-2xl xl:text-3xl font-bold md: p-4 hover:text-black">
      <img src="http://docode.com.tr/images/logo.png" alt="logo" />
    </div>
  );
}

export default Navigation;
