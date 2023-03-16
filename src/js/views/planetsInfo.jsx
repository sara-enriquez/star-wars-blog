import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const PlanetsInfo = () => {
    const [planet, setPlanet] = useState({});
    const params = useParams();
    console.log("params" ,params.idPlanet);
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${params.idPlanet}`)
          .then((resp) => resp.json())
          .then((data) => setPlanet(data.result))
          .catch((err) => console.log(err));
      }, []);
      console.log("planet" ,planet);
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"></img>
            </div>
            <div className="col-md-6">
                <h2>{planet.properties?.name}</h2>
                <p>{planet.description}</p>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-2"><h5>Climate</h5><p>{planet.properties?.climate}</p></div>
            <div className="col-md-2"><h5>Population</h5><p>{planet.properties?.population}</p></div>
            <div className="col-md-2"><h5>Orbital Period</h5><p>{planet.properties?.orbital_period}</p></div>
            <div className="col-md-2"><h5>Rotation Period</h5><p>{planet.properties?.rotation_period}</p></div>
            <div className="col-md-2"><h5>Diameter</h5><p>{planet.properties?.diameter}</p></div>
        </div>
    </div>
    )
}

export default PlanetsInfo;