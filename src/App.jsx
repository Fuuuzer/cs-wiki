import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="bg-gray-900 flex flex-col gap-10">
      <Header />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
