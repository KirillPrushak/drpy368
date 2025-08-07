import "./ControlPanel.scss";
import { Locations } from "../../types/shops";

interface ControlPanelProps {
  items: Locations;
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
}

function ControlPanel({
  items,
  currentLocation,
  setCurrentLocation,
}: ControlPanelProps) {
  return (
    <section className="section-panel">
      <div className="title-panel">
        <h1>Магазины</h1>
      </div>
      <div className="control-panel">
        {Object.keys(items).map((key) => {
          const isActive = currentLocation === key;
          return (
            <button
              className={`${isActive ? "isActive" : "unActive"}`}
              key={key}
              onClick={() => setCurrentLocation(key)}
            >
              {items[key].name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default ControlPanel;
