import React from "react";
import guns from "../guns";

const Gun = () => {
  return (
    <>
      {guns.map((item) => (
        <div className="flex flex-col rounded p-6 w-full" key={item.id}>
          <h1 className="text-2xl uppercase font-bold text">{item.name}</h1>
          <img className="w-2xs hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl cursor-pointer transition p-2" src={'./public/' + item.name + '.png'} alt="" />
          <p >{item.description}</p>
        </div>)
      )}
    </>
  );
};

export default Gun;