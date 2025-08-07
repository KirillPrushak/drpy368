import { MapContainer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { Locations } from "../../types/shops";
import { locations } from "../../data/locations";
import Modal from "../Modal/Modal";

interface MapCoordinatorProps {
  items: Locations;
  currentLocation: string;
}

function Map({ items, currentLocation }: MapCoordinatorProps) {
  const currentLocationData = locations[currentLocation];

  return (
    <>
      <MapContainer
        center={currentLocationData.center}
        zoom={11}
        key={currentLocationData.name}
        scrollWheelZoom={false}
        className="map"
      >
        <Modal items={items} currentLocation={currentLocation} />
      </MapContainer>
    </>
  );
}

export default Map;
