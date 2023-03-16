import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselPlanets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets?page=1&limit=18")
      .then((resp) => resp.json())
      .then((data) => setPlanets(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div id="carousel" className="card-group ">
        {planets.length==18 ? planets.map((planet, i) => {
          return (
            <Card
              name={planet.name}
              image={
                `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
              }
              type={"planets"}
              id={planet.uid}
            />
          );
        }): <p>Loading ...</p>
        }
      </div>
    </div>
  );
};

export default CarouselPlanets;
