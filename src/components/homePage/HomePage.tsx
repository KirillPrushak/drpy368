import { useState } from "react";
import { locations } from "../../data/locations";
import ControlPanel from "../ControlPanel/ControlPanel";
import Map from "../map/Map";
import "./HomePage.scss";

function HomePage() {
  const data = locations;
  const [currentLocation, setCurrentLocation] = useState("minsk");

  return (
    <section className="section-home">
      <ControlPanel
        items={data}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <div className="container">
        <div className="container-map">
          <Map items={data} currentLocation={currentLocation} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
