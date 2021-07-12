import React from "react";

function Thumbnail({ item }) {
  console.log(item);
  const year = new Date().getFullYear();
  const yearOfUpload = item && item.importDate.slice(0, 4);
  const importDate =
    item && item.importDate.replaceAll("-", "/").replace("T", " ");
  const lastEditDate =
    item && item.lastEditDate.replaceAll("-", "/").replace("T", " ");

  return (
    <div className="m-4 text-sm lg:w-1/3 xl:w-1/5 2xl:w-1/6 lg:test-lg xl:text-sm border-2 border-gray-400  ">
      <div className="w-full h-80 transform transition duration-700 ease-in-out hover:scale-105 delay-400 cursor-pointer">
        <img
          className="w-full h-full object-cover p-1"
          src={`http://talent.docode.com.tr/thumbnail/${item.thumbnail}.jpg`}
        />
      </div>
      <div className="flex flex-col p-2   font-semibold text-md font-mono border-t-2 border-gray-400">
        <div className="w-full flex justify-start pl-2 font-bold my-1">
          {item.designName}
        </div>
        <div className="flex flex-col px-2 font-light">
          {item.tags.map((tag) => {
            return <span className="my-1">{tag}</span>;
          })}
        </div>
        <div className="px-2 font-extralight text-xs">
          <div className="mt-2 py-0.5">{`U: ${importDate} `}</div>
          <div className="py-0.5">{`E: ${lastEditDate}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
