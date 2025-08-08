import { Marker, Popup } from "react-leaflet";
import "./Modal.scss";
import { ModalProps } from "../../types/props/modalProps";
import { customIcon } from "../custom/CustomIcon";

function Modal({ items }: ModalProps) {
  return (
    <>
      {Object.keys(items).map((key) => {
        const pos = items[key].center;
        const item = items[key];

        return (
          <Marker key={key} position={pos} icon={customIcon}>
            <Popup>
              <p>{item.name}</p>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Modal;
