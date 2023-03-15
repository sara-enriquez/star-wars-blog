import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselPeople = () => {
  const [people, setPeolpe] = useState ([]);
  useEffect (()=>{
      fetch("https://www.swapi.tech/api/people")
      .then(resp => resp.json())
      .then(data => setPeolpe(data.results) )
      .catch(err => console.log(err))
  },[])
 
  return (
    <div className="container">
      <div className="card-group carousel">
        {people.map((character, i) => {
          return <Card name = {character.name} image = {"https://e7.pngegg.com/pngimages/281/633/png-clipart-star-wars-darth-vader-art-anakin-skywalker-star-wars-masters-of-teras-kasi-obi-wan-kenobi-palpatine-dark-lord-the-rise-of-darth-vader-darth-vader-fictional-character-film.png"}/>
        })}
        </div>
      </div>
  );
};

export default CarouselPeople;
