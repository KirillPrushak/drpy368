import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { Locations } from "../../types/shops";
import { locations } from "../../data/locations";
import Modal from "../Modal/Modal";

import L from "leaflet";
import { dataCountry } from "../../data/dataCountry";

interface MapCoordinatorProps {
  items: Locations;
  currentLocation: string;
}

interface PurpleOptions {
  color: string;
}

const purpleOptions: PurpleOptions = { color: "purple" };

function Map({ items, currentLocation }: MapCoordinatorProps) {
  const currentLocationData = locations[currentLocation];

  return (
    <MapContainer
      center={currentLocationData.center}
      zoom={6}
      key={currentLocationData.name}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {dataCountry.features.map((data: any) => {
        const positions = data.geometry.coordinates[0].map((item: any) => [
          item[1],
          item[0],
        ]);
        const center = data.geometry.centerCoordinates;

        const centerCoordinate = data?.position?.centerCoordinate;

        return (
          <>
            <Polygon
              pathOptions={purpleOptions}
              positions={positions}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  console.log(layer);
                  layer.setStyle({
                    color: "#F88",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    color: "#34dd50",
                  });
                },
                click: (e) => {
                  const layer = e.target;
                  layer
                    .bindPopup(
                      `<div>
                      <p>${data.properties.description}</p>
                      <p><span>Координаты</span>: ${center}</p>
                      <p>Население: ${data.properties.population}</p>
                      </div>`
                    )
                    .openPopup();
                },
              }}
            />
            <Modal
              items={items}
              currentLocation={currentLocation}
              data={data}
            />
          </>
        );
      })}
    </MapContainer>
  );
}

export default Map;
