import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDragon,
  faRotate,
  faPlus,
  faMinus,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="clicker">
        <div className="title container-fluid">
          <h1>
            <FontAwesomeIcon icon={faHandPointer} size="1x" />
            React Clicker
          </h1>
        </div>
        <div className="counter container">
          <p className="count-view">{count}</p>
          <div>
            <FontAwesomeIcon
              onClick={() => setCount((count) => count + 1)}
              icon={faPlus}
              size="4x"
              className="plus"
            />
            <FontAwesomeIcon
              onClick={() => setCount((count) => 0)}
              icon={faRotate}
              size="4x"
              className="restart"
            />
            <FontAwesomeIcon
              onClick={() => setCount((count) => count - 1)}
              icon={faMinus}
              size="4x"
              className="minus"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
