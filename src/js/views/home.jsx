import React from "react";
import "../../styles/home.css";
import CarouselPeople from "../component/carouselPeople.jsx";
import CarouselPlanets from "../component/carouselPlanets.jsx";
import CarouselCars from "../component/carouselCars.jsx";

export const Home = () => (
  <div className="text-center home">
    <h1 className="headers">Characters</h1>
    <CarouselPeople />
    <h1 className="headers">Planets</h1>
    <CarouselPlanets />
    <h1 className="headers">Vehicles</h1>
    <CarouselCars />
  </div>
);
