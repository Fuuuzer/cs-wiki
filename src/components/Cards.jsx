import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap mx-auto justify-center max-w-[1200px] gap-10 p-6 bg-gray-900">
      <div className="w-full text-center text-amber-500">
        <h1 className="font-bold text-4xl">Armas</h1>
      </div>
      <Card gun={"usp"} />
      <Card gun={"ak-47"} />
      <Card gun={"usp"} />
      <Card gun={"ak-47"} />
      <Card gun={"usp"} />
      <Card gun={"ak-47"} />
    </div>
  );
};

export default Cards;
