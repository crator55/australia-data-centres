import { useState } from "react";

import AustraliaMap from "./components/AustraliaMap";
import CsvUploader from "./components/CsvUploader";

function App() {
  const [locations, setLocations] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <h1>Australia Data Centre Map</h1>
      </header>

      <CsvUploader onDataLoaded={setLocations} />

      <AustraliaMap locations={locations} />
    </div>
  );
}

export default App;