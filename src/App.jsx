import React, { useEffect, useState } from "react";
import Sketchpad from "./sketchpad";

import GameClient from "./GameClient";

const App = () => {
  const mockSketchData = {
    width: 300,
    height: 300,
    playerId: 1,
  };

  return (
    <div>
      <GameClient sketchData={mockSketchData} />
    </div>
  );
};

export default App;
