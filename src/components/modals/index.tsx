import { Marker, Popup } from "react-leaflet";
import { ModalProps } from "./type";
import { customPin } from "../icons";

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
