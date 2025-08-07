import { useState } from "react";
import "./ControlPanel.scss";
import { Locations } from "../../types/shops";

interface ControlPanelProps {
  items: Locations;
}

function ControlPanel({ items }: ControlPanelProps) {
  const [currentLocation, setCurrentLocation] = useState("minsk");
  console.log(currentLocation);

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
