import { Circle, MapContainer, Polygon, Popup, TileLayer } from "react-leaflet";
import "./index.scss";
import "leaflet/dist/leaflet.css";
import { shops } from "../../data/shops";

import { ColorOptions, CoordinatProps } from "./types";
import { Position } from "../../types/state";

import { dataCountry } from "../../data/state";
import CoordinateModal from "../modals/coordinatesModal";

const COLOR = "#696969";

function Map({ items, currentLocation }: CoordinatProps) {
  const currentLocationData = shops[currentLocation];
  const colorOptions: ColorOptions = { color: COLOR };

  return (
    <MapContainer
      center={currentLocationData.center}
      zoom={7}
      key={currentLocationData.name}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Circle
        center={currentLocationData.center}
        radius={8000}
        pathOptions={{ color: "red", fillColor: "#f03", fillOpacity: 0.5 }}
      >
        <Popup>Нарисовать круг</Popup>
      </Circle>

      <CoordinateModal items={items} />

      {dataCountry.features.map((data) => {
        const center = data.geometry.centerCoordinates;
        const positions = data.geometry.coordinates[0].map(
          (item: number[]) => [item[1], item[0]] as Position
        );

        return (
          <>
            {center && (
              <Polygon
                key={data.id}
                pathOptions={colorOptions}
                positions={positions}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      color: "#F88",
                    });
                  },
                  mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      color: COLOR,
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
            )}
          </>
        );
      })}
    </MapContainer>
  );
}

export default Map;
