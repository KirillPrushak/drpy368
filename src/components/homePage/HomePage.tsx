import ControlPanel from "../ControlPanel/ControlPanel";
import Map from "../map/Map";
import "./HomePage.scss";

function HomePage() {
  return (
    <section className="section-home">
      <ControlPanel />
      <div className="container">
        <div className="container-map">
          <Map />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
