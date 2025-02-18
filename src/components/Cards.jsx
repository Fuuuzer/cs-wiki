import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-15 max-w-[1200px] mx-auto items-center p-6">
      <Card gun={"usp"} />
      <Card gun={"usp"} />
      <Card gun={"usp"} />
      <Card gun={"usp"} />
    </div>
  );
};

export default Cards;
