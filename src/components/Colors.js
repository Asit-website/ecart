import React from "react";

const Colors = ({colors,product}) => {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return (
          <button style={{ backgroundColor: color }} key={index}>
            {color}
          </button>
        );
      })}
    </div>
  );
};

export default Colors;
