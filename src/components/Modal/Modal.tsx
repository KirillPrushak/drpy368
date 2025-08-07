import { Marker, Popup, TileLayer } from "react-leaflet";
import { Locations } from "../../types/shops";
import "./Modal.scss";

interface ModalProps {
  items: Locations;
  currentLocation: string;
}

function Modal({ items, currentLocation }: ModalProps) {
  const currentLocationData = items[currentLocation];
  console.log(currentLocationData);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentLocationData.shops.map((shop) => {
        return (
          <Marker key={shop.id} position={shop.coordinates}>
            <Popup>
              <div className="modal">
                <h3>{shop.name}</h3>
                <p>{`Координаты: ${shop.coordinates}`}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Modal;
