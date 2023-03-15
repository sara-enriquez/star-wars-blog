import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselPlanets = () => {
    const [planets, setPlanets] = useState ([]);
    useEffect (()=>{
        fetch("https://www.swapi.tech/api/planets")
        .then(resp => resp.json())
        .then(data => setPlanets(data.results) )
        .catch(err => console.log(err))
    },[])
   
    return (
      <div className="container">
        <div id="carousel" className="card-group ">
          {planets.map((planet, i) => {
            return <Card name = {planet.name} image = {"https://e7.pngegg.com/pngimages/546/438/png-clipart-star-wars-the-old-republic-coruscant-planet-planet-miscellaneous-game.png"}/>
          })}
        </div>
      </div>
    );
  };

  export default CarouselPlanets;
  