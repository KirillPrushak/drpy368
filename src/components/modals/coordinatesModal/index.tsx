import { Marker, Popup } from "react-leaflet";
import { ModalProps } from "./type";
import Leaflet from "leaflet";

const customPin = new Leaflet.Icon({
  iconUrl: "https://img.icons8.com/?size=100&id=15989&format=png&color=000000",
  iconSize: [30, 30],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function CoordinateModal({ items }: ModalProps) {
  return (
    <>
      {Object.keys(items).map((key) => {
        const pos = items[key].center;
        const item = items[key];

        return (
          <Marker key={key} position={pos} icon={customPin}>
            <Popup>
              <p>{item.name}</p>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default CoordinateModal;
