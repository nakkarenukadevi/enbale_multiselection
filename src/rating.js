import React, { useState } from "react";
import star from "../src/star-regular.svg";

const Rating = () => {
  let [color, setColor] = useState(false);
  return (
    <div>
      {color ? (
        <img
          src={star}
          style={{ width: "50px", height: "50px" }}
          className="star"
          onClick={() => {
            setColor(true);
          }}
        />
      ) : (
        <img
          src={star}
          style={{ width: "50px", height: "50px" }}
          onClick={() => {
            setColor(true);
          }}
        />
      )}

      <img src={star} style={{ width: "50px", height: "50px" }} />
      <img src={star} style={{ width: "50px", height: "50px" }} />
      <img src={star} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};

export default Rating;
