import "./ControlPanel.scss";

function ControlPanel() {
  return (
    <section className="section-panel">
      <div className="title-panel">
        <h1>Магазины</h1>
      </div>
      <div className="control-panel">
        <button>Минск</button>
        <button>Слуцк</button>
        <button>Солигорск</button>
      </div>
    </section>
  );
}

export default ControlPanel;
