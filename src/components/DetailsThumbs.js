import React from "react";

const DetailsThumbs = ({images,setIndex}) => {
  return (
    <div className="thumb">
      {images.map((img, index) => {
        return <img src={img} key={index} onClick={()=>setIndex(index)} alt="" />;
      })}
    </div>
  );
};

export default DetailsThumbs;
