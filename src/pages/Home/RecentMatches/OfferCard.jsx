import React from "react";

function OfferCard({
  lobDisplayText,
  newHeroOfferCardUrl,
  heroUrl,
  newHeroUrl,
  hero,
  pTl,
  pTx,
}) {
  // title description of the offer in each card
  // nav arrows in carousel
  return (
    <div className="max-w-[280px] w-[280px] md:w-[350px] md:max-w-[350px]  h-[340px] bg-white  shrink-0 rounded-lg overflow-hidden shadow-md  ">
      <div className="max-w-full w-full flex flex-col">
        <div className="w-full">
          <img
            src={newHeroOfferCardUrl || newHeroUrl}
            alt={pTl}
            className="rounded-md bg-orange-600 w-full h-[160px] object-cover object-center"
          />
        </div>
        <div className="details p-2  text-left w-full text-ellipsis overflow-hidden ">
          <h2 className="font-medium capitalize text-slate-400 text-base pb-1">
            {lobDisplayText.toLowerCase()}{" "}
          </h2>
          <h3 className="font-medium text-lg text-wrap truncate pb-1 ">
            {pTl}
          </h3>
          <p className=" text-slate-500 text-wrap text-clip pt-1 overflow-hidden">
            {pTx}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
