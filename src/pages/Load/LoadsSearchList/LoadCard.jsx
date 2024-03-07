import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const LoadCard = ({
  load_id,
  from_city,
  from_pin,
  to_city,
  to_pin,
  image_urls,
  created_at,
  updated_at,
  created_by,
  length,
  width,
  height,
  weight,
}) => {
  return (
    <article className="card w-full border-2 relative rounded-xl h-fit py-4 px-2 hover:shadow-even transition-all bg-white duration-500 scale-[98%] hover:scale-100">
      <div className="ml-4 pb-3 flex gap-4 items-center">
        <span className="text-base">{from_city}</span>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="source basis-[23.3%] text-center">
          <div className="location text-xs truncate text-slate-500 capitalize">
            {from_city}
          </div>
          <div className="time font-semibold">{created_at}</div>
        </div>
        <div className="duration basis-[23.3%] text-center">
          <div className="stop text-xs truncate text-slate-500 capitalize">
            To: {to_city}
          </div>
          <div className="duration font-semibold">{updated_at}</div>
        </div>
        <div className="dest basis-[23.3%] text-center">
          <div className="location text-xs truncate text-slate-500 capitalize">
            Length: {length}
          </div>
          <div className="time font-semibold">Width: {width}</div>
          <div className="time font-semibold">Height: {height}</div>
          <div className="time font-semibold">Weight: {weight}</div>
        </div>

        <div className="font-semibold basis-[30%] text-center flex items-center justify-center flex-wrap md:gap-4"></div>
      </div>

      <div className="font-medium text-center text-xs text-blue-600 cursor-pointer select-none transition-all"></div>
    </article>
  );
};

export default LoadCard;
