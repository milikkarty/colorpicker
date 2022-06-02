import Square from "./Square";
import SearchColor from "./SearchColor";
import { useState } from "react";

function App() {

  const [colorName, setColorName] = useState('');

  return (
    <div className="App">
      <Square
        colorName={colorName}
      />
      <SearchColor
        colorName={colorName}
        setColorName={setColorName}
      />
    </div>
  );
}

export default App;
