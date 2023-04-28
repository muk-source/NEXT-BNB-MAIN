import { getCenter } from "geolib";
import React, { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker, Popup, PositionOptions } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PowerIcon } from "@heroicons/react/24/solid";

function MapBox({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  const [selectedlocation,setSelectedLocation] = useState({})
  console.log("selectedlocation",selectedlocation.long)
  return (
    <Map
      initialViewState={{ ...viewport }}
      // style={{width: 100%, height: 100%}}
      mapStyle="mapbox://styles/mukund22/clgdim3zf007901ok6dqmmvfd"
      mapboxAccessToken={process.env.MapboxAccessToken}
      OnViewportChange={(nextviewport) => setViewport(nextviewport)}
      
    >
      {searchResults.map((res)=>(
      <div key={res.long}>
        {console.log(res.long)}
        
        <Marker longitude={res.long} latitude={res.lat} offsetLeft={-20} offsetTop={-10}>
          <p className="cursor-pointer text-2xl animate-bounce" onClick={()=>setSelectedLocation(res)} role="img">🎈</p>
          
        </Marker>
        {/* {console.log("selected",selectedlocation.long)}
        {console.log("check",selectedlocation.long===res.long)}
        {selectedlocation.long === res.long ? (
          <>
          <Popup closeOnClick={true} onClose={() => setSelectedLocation({})} latitude={res.lat} longitude={res.long}>{res.title}</Popup>
          
          {console.log("hey ")}
          
          </>
          
        ): "this is not working"} */}
      </div>
    ))}
    </Map>

    
  );
}

export default MapBox;
