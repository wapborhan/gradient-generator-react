import React from "react";

const Color = (props) => {
  return (
    <div className="color">
      <h2 className="text-dark">Choose Color</h2>
      <div className="text-white text-center py-2 rounded mb-3  text-white w-40 mx-auto">
        <h2 className="bg-amber-700">{props.error}</h2>
      </div>

      <div className="d-flex justify-content-between">
        <input
          type="color"
          //   ref={hex}
          defaultValue={props.color1}
          style={props.icolor1}
          className="rounded text-center shadow-2xl w-28 h-12"
          name="hex"
          onChange={(e) => props.setColor1(e.target.value)}
        />

        <input
          type="color"
          // ref={hex2}
          defaultValue={props.color2}
          style={props.icolor2}
          className="rounded text-center shadow-2xl w-28 h-12"
          name="hex2"
          onChange={(e) => props.setColor2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Color;
