import { useState } from "react";
import React from "react";

function ImagePreview(source, handleDeleteImg) {
  const [visible, setVisible] = useState(false);
  console.log(source);
  const handleClick = (e) => {
    console.log(e);
    setVisible((prev) => !prev);
  };
  return (
    <>
      <div className="mt-2 px-1  py-1 bg-gray-100 rounded-xl">
        <button className="" onClick={handleDeleteImg}>
          x
        </button>
        <div
          className="w-full h-[150px] my-[10px] bg-cover bg-center  bg-no-repeat border  border-gray-300 border-5 rounded-lg cursor-pointer"
          style={{ backgroundImage: `url(${source.source})` }}
        ></div>
      </div>
    </>
  );
}

export default ImagePreview;
