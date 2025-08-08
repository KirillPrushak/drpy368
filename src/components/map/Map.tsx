import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import "./Map.scss";
import "leaflet/dist/leaflet.css";
import { locations } from "../../data/locations";
import Modal from "../Modal/Modal";
import { dataCountry } from "../../data/dataCountry";
import { CoordinatProps } from "../../types/props/coordinatProps";
import { ColorOptions } from "../../types/props/colorOptions";
import { Position } from "../../types/dataCountry";

function Map({ items, currentLocation }: CoordinatProps) {
  const currentLocationData = locations[currentLocation];
  const colorOptions: ColorOptions = { color: "purple" };

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
            )}
            <Modal items={items} />
          </>
        );
      })}
    </MapContainer>
  );
}

export default Map;
