import { Marker, Popup } from "react-leaflet";
import "./Modal.scss";
import { ModalProps } from "../../types/props/modalProps";
import { customIcon } from "../custom/CustomIcon";

function Modal({ items }: ModalProps) {
  return (
    <>
      {Object.keys(items).map((key) => {
        const pos = items[key].center;
        <Marker key={key} position={pos} icon={customIcon}>
          <Popup>
            <div className="modal">
              <h3>sdcsdvd</h3>
              <p>Координаты: 1111</p>
            </div>
          </Popup>
        </Marker>;
      })}
    </>
  );
}

export default Modal;
