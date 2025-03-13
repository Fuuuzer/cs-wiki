import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="bg-gray-900 flex flex-col gap">
      <Header />
      <Hero />
      <h1 className="font-bold text-4xl text-center mt-10 text-amber-300">Armas</h1>
      <Cards />
    </div>
  );
}


export default App;
