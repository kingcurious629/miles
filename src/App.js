import "./styles.css";
import miles from "../public/images/milesroom.png";

export default function App() {
  return (
    <div className="App">
      <h1 className="super-awesome-text">Gwen and Miles Spining </h1>
      <h2>Miles's Room</h2>
      <img
        className="spin-img"
        src={miles}
        alt="spiderman"
        width="500"
        height="400"
      />
    </div>
  );
}
