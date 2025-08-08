import { ControlPanelProps } from "../../types/props/controlPanelProps";
import "./ControlPanel.scss";

function ControlPanel({
  items,
  currentLocation,
  setCurrentLocation,
}: ControlPanelProps) {
  return (
    <section className="section-panel">
      <div className="control-panel">
        {Object.keys(items).map((key) => {
          const isActive = currentLocation === key;
          const center = items[key].name;
          return (
            <button
              className={`${isActive ? "isActive" : "unActive"}`}
              key={key}
              onClick={() => setCurrentLocation(key)}
            >
              {center}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default ControlPanel;
