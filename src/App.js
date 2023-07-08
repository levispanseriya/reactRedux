import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const disPatch = useDispatch();

  return (
    <div className="App">
      <h1>Increnment/Decrenment</h1>
      <h4>using React/Redux</h4>

      <div className="quentity">
        <button
          className="q_minus"
          title="Decrenment"
          onClick={() => disPatch(decNumber)}
        >
          <span>-</span>
        </button>
        <input
          name="quentity"
          type="text"
          class="quentity_input"
          value={myState}
        />
        <button
          className="q_plus"
          title="Increnment"
          onClick={() => disPatch(incNumber)}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default App;
