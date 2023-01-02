import React from "react";

const Sizes = ({sizes,product}) => {
  return (
    <div className="sizes">
      {sizes.map((size, index) => {
        return <button key={index}>{size}</button>;
      })}
    </div>
  );
};

export default Sizes;
