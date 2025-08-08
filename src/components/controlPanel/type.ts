import { Locations } from "../../types/shops";

export interface ControlPanelProps {
  items: Locations;
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
}
