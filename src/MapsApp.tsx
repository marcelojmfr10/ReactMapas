import { PlacesProvider } from "./context";
import { HomePage } from "./pages";

import "./index.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomePage />
    </PlacesProvider>
  );
};
