import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [disabled, setDisabled] = useState(false);

  function getButtonColor() {
    if (disabled) {
      return "grey";
    }
    return buttonColor;
  }

  return (
    <div className="flexContainer">
      <button
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
        className="styled"
        style={{ backgroundColor: getButtonColor() }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>

      <div className="checkbox-container">
        <input
          onChange={() => {
            setDisabled((currentDisabled) => !currentDisabled);
          }}
          type="checkbox"
          id="checkbox-for-button"
          name="checkButton"
        />
        <label for="checkbox-for-button">Check the button</label>
      </div>
    </div>
  );
}

export default App;
