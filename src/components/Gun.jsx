import React from "react";
import guns from "../guns";

const Gun = () => {
  return (
    <>
      {guns.map((item) => (
        <div>
          <h1 key={item.name}>{item.name}</h1>
        </div>)
      )}
    </>
  );
};

export default Gun;
