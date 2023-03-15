import React, { useEffect, useState } from "react";
import Card from "./card.jsx";

const CarouselCars = () => {
  const [cars, setCars] = useState ([]);
  useEffect (()=>{
      fetch("https://www.swapi.tech/api/vehicles")
      .then(resp => resp.json())
      .then(data => setCars(data.results) )
      .catch(err => console.log(err))
  },[])
 
  return (
    <div className="container">
      <div id="carousel" className="card-group">
        {cars.map((vehicle, i) => {
          return <Card name = {vehicle.name} image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-Q2mfZMOtoqUc-aDBNwnfpw3-DX8jU8NNQ&usqp=CAU"}/>
        })}
      </div>
    </div>
  );
};

export default CarouselCars;