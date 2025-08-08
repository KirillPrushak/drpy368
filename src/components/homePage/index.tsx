import { useState } from "react";
import { shops } from "../../data/shops";
import "./index.scss";

import ControlPanel from "../controlPanel/index";
import Map from "../map/index";

function HomePage() {
  const data = shops;
  const [currentLocation, setCurrentLocation] = useState("minsk");

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
