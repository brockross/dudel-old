import React, { useEffect } from "react";
import Sketchpad from "./sketchpad";

const GameClient = (props) => {
  // receives JSON representing sketch (init or from another player)
  // timer here?
  let sketch;
  let sketchId = `sketch-${props.sketchData.playerId}`;

  useEffect(() => {
    props.sketchData.element = "#" + sketchId;
    sketch = new Sketchpad(props.sketchData);
  }, []);

  const handleUndo = () => {
    sketch.undo();
  };

  const handleRedo = () => {
    sketch.redo();
  };

  // send sketch to some central store, either on Submit click, or after timer expires
  return (
    <div>
      Canvas:
      <canvas id={sketchId} className={"canvasBox"}></canvas>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default GameClient;
