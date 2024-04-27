import React from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = { lat: 19.24, lng: 73.13 };

function InputFieldG() {
  console.log(import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded && !loadError) return <div>Loading...</div>;
  if (loadError) return <div>{loadError}</div>;
  // The map will be rendered in this container

  return (
    <>
      {isLoaded && (
        <div>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: 500, height: 500 }}
          ></GoogleMap>
        </div>
      )}
    </>
  );
}

export default InputFieldG;
