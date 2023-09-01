import { useState } from "react";

import Canvas from "./canvas/index.jsx";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
