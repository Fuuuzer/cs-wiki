import React from "react";

const Card = ({ gun }) => {
  return (
    <div className="flex flex-wrap gap-6 text-white border w-[300px] rounded">
      <div className="flex flex-col rounded p-6 w-full">
        <div className="bg-blue-900 rounded-lg">
          <img
            className="w-2xs hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl cursor-pointer transition p-2"
            src={"./public/" + gun + ".png"}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-2xl uppercase font-bold text">{gun}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            voluptates a voluptas recusandae nobis perferendis accusantium
            officiis, vitae aliquam dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
