import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import randomPoints from "./points.json";
import "./style.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnViYmxpbmctc29sIiwiYSI6ImNsZmM3NmI0cTA0dzAzc3A2MXN6bTRkaXQifQ.YAwSLd4Td2hwWHLhHzQ4MA";

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 10, // starting zoom
});

map.on("load", () => {
  map.addSource("points", {
    type: "geojson",
    data: randomPoints,
  });

  map.addLayer({
    id: "points",
    type: "circle",
    source: "points",
    paint: {
      "circle-color": "yellow",
    },
  });
});
