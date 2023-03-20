import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselPeople = () => {
  const [people, setPeolpe] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people?page=1&limit=40")
      .then((resp) => resp.json())
      .then((data) => setPeolpe(data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="card-group carousel">
        { people.length==40 ? people.map((character) => {
          return (
            <Card
              name={character.name}
              image={
                `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`
              }
              type={"people"}
              id={character.uid}
            />
          )
        }):<p>Loading ...</p>
        }
      </div>
    </div>
  );
};

export default CarouselPeople;
