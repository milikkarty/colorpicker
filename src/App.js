import Square from "./Square";
import SearchColor from "./SearchColor";
import { useState } from "react";

function App() {

  const [colorName, setColorName] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [rgbaColor, setRgbaColor] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square
        colorName={colorName}
        hexColor={hexColor}
        rgbaColor={rgbaColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <SearchColor
        colorName={colorName}
        setColorName={setColorName}
        setHexColor={setHexColor}
        setRgbaColor={setRgbaColor}
      />
    </div>
  );
}

export default App;
