import { useState } from "react";
import { shops } from "../../data/shops";
import "./index.scss";
import ControlPanel from "../../components/controlPanel";
import Map from "../../components/map";

function HomePage() {
  const data = shops;
  const [currentLocation, setCurrentLocation] = useState<string>("minsk");

  return (
    <section className="section-home">
      <div className="wrapper">
        <div className="control-panel">
          <ControlPanel
            items={data}
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </div>
        <div className="container">
          <div className="container-map">
            <Map items={data} currentLocation={currentLocation} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
