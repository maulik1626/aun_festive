import { Route } from "react-router-dom";
import LocationView from "@presentation/views/location/LocationView.jsx";

export function LocationRoutes() {
  return [<Route key="location-debug" path="/location" element={<LocationView />} />];
}


