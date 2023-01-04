import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

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
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
