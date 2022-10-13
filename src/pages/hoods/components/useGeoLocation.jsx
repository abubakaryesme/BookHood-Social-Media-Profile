import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [currLocation, setCurrLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (currLocation) => {
    setCurrLocation({
      loaded: true,
      coordinates: {
        lat: currLocation.coords.latitude,
        lng: currLocation.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setCurrLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return currLocation;
};

export default useGeoLocation;
