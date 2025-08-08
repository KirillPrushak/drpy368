import { Marker, Popup, TileLayer } from "react-leaflet";
import { Locations } from "../../types/shops";
import "./Modal.scss";

interface ModalProps {
  items: Locations;
  currentLocation: string;
  data: any;
}

function Modal({ items, currentLocation, data }: ModalProps) {
  const currentLocationData = items[currentLocation];
  console.log(currentLocationData);

  return (
    <>
      {/* <TileLayer
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
      })} */}
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      {/* {data.geometry.map()} */}
      return (
      <Marker position={[52.098306205095305, 23.760220530609157]}>
        <Popup>
          <div className="modal">
            <h3>sdcsdvd</h3>
            <p>Координаты: 1111</p>
          </div>
        </Popup>
      </Marker>
      ); z
    </>
  );
}

export default Modal;
