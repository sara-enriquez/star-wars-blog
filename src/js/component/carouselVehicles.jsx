import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles?page=1&limit=20")
      .then((resp) => resp.json())
      .then((data) => setVehicles(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div id="carousel" className="card-group">
        {vehicles.length==20 ? vehicles.map((vehicle, i) => {
          return (
            <Card
              name={vehicle.name}
              image={
                `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`
              }
              type={"vehicles"}
              id={vehicle.uid}
            />
          );
        }) : <p>Loading ...</p>}
      </div>
    </div>
  );
};

export default CarouselVehicles;
