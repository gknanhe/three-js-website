import React from "react";
//color picker lib from react
import { SketchPicker } from "react-color";

import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#EF674E",
          "#353934",
          "#3CFFD0",
          "#5B69FF",
          "#F9DFE8",
          "#D9E3F0",
          "#F47373",
          "#697689",
          "#37D67A",
          "#2CCCE4",
          "#555555",
          "#dce775",
          "#ff8a65",
          "#ba68c8",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
