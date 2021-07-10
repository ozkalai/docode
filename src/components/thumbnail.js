import React from "react";

function Thumbnail({ item }) {
  const year = new Date().getFullYear();
  const yearOfUpload = item && item.importDate.slice(0, 4);
  return (
    <div className="m-4 text-sm lg:w-1/3 xl:w-1/5 2xl:w-1/6 lg:test-lg xl:text-sm ">
      <div className="w-full h-80">
        <img
          className="w-full h-full object-cover"
          src={`http://talent.docode.com.tr/thumbnail/${item.thumbnail}.jpg`}
        />
      </div>
      <div className="flex flex-col p-2 rounded-b-lg bg-gray-300 font-semibold text-md">
        <div className="w-full flex justify-start pl-2 font-bold">
          {item.designName}
        </div>
        <div className="flex justify-between">
          <div className="flex justify-center items-center p-2">
            {item.tags[0]}
          </div>
          <div className="flex justify-center items-center p-2">
            {item.tags[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
