import React from "react";
import guns from "../guns";

const Gun = () => {
  return (
    <>
      {guns.map((item) => (
        <div className="flex flex-col flex-wrap rounded p-5 border-2 border-white shrink-0 gap-3" key={item.id}>
          <div className="rounded-sm p-1 bg-">
            <img className="w-2xs hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl cursor-pointer transition p-2" src={'/' + item.name + '.png'} alt="" />
          </div>
          <div>
            <h2 className="text-2xl uppercase font-bold text-white">{item.name}</h2>
            <p className="text-white">{item.description}</p>
            <button className="cursor-pointer">Ver mais</button>
          </div>
        </div>)
      )}
    </>
  );
};

export default Gun;