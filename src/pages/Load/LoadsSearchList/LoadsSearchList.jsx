import React from "react";
import { useParams } from "react-router-dom";

function LoadsSearchList() {
  const { searchQuery } = useParams();
  console.log(searchQuery);
  const encodedString = searchQuery ?? "";
  console.log(encodedString);
  const extractedEncodedPath = encodedString.replace("info-", "");
  const decodedPath = atob(extractedEncodedPath);
  console.log(decodedPath);
  const [location] = decodedPath?.split("--");
  const [source, dest] = location?.split("-");
  console.log(source, dest);

  return <div className="h-[200px]">LoadsSearchList</div>;
}

export default LoadsSearchList;
