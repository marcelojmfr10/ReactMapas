import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import mapboxgl from "mapbox-gl";
import { MapsApp } from "./MapsApp.tsx";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX;

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapsApp />
  </StrictMode>,
);
