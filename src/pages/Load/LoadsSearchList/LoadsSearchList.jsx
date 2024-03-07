import React from "react";
import { useParams } from "react-router-dom";

function LoadsSearchList() {
  const { searchQuery } = useParams();
  // Destructure and decode the searchQuery path
  const { source, dest } = decodeSearchQuery(searchQuery);

  return (
    <div className="h-[200px]">
      <h2>Loads Search List</h2>
      <p>Source: {source}</p>
      <p>Destination: {dest}</p>
    </div>
  );
}

export default LoadsSearchList;

function decodeSearchQuery(searchQuery) {
  // Check if searchQuery is null or undefined
  if (!searchQuery) return { source: "", dest: "" };

  // Remove "info-" from the searchQuery
  const extractedEncodedPath = searchQuery.replace("info-", "");
  // Decode the URI component
  const decodedPath = decodeURIComponent(extractedEncodedPath);
  // Split the decoded path to get source and destination
  const [source, dest] = decodedPath.split("--");

  return { source, dest };
}
