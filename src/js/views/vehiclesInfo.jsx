import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const VehiclesInfo = () => {
    const [vehicle, setVehicle] = useState({});
    const params = useParams();
    console.log("params" ,params.idVehicle);
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${params.idVehicle}`)
          .then((resp) => resp.json())
          .then((data) => setVehicle(data.result))
          .catch((err) => console.log(err));
      }, []);
      console.log("vehicle properties" ,vehicle.properties);
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"></img>
            </div>
            <div className="col-md-6">
                <h2>{vehicle.properties?.name}</h2>
                <p>{vehicle.description}</p>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-2"><h5>Passengers</h5><p>{vehicle.properties?.passengers}</p></div>
            <div className="col-md-2"><h5>Model</h5><p>{vehicle.properties?.model}</p></div>
            <div className="col-md-2"><h5>Crew</h5><p>{vehicle.properties?.crew}</p></div>
            <div className="col-md-2"><h5>Consumables</h5><p>{vehicle.properties?.consumables}</p></div>
            <div className="col-md-2"><h5>Cost</h5><p>{vehicle.properties?.cost_in_credits}</p></div>
        </div>
    </div>
    )
}

export default VehiclesInfo;