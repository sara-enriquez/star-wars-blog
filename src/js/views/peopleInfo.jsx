import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const peopleInfo = () => {
const [character, setCharacter] = useState({})
    const params = useParams();
    console.log("params" ,params.idPeople)
    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.idPeople}`)
          .then((resp) => resp.json())
          .then((data) => setCharacter(data.result))
          .catch((err) => console.log(err));
      }, []);
      console.log("character" ,character)
 return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-solid-color-simple-background-image_557028.jpg"></img>
            </div>
            <div className="col-md-6">
                <h2>{character.properties?.name}</h2>
                <p>{character.description}</p>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-2"><h5>Birth Year</h5><p>{character.properties?.birth_year}</p></div>
            <div className="col-md-2"><h5>Gender</h5><p>{character.properties?.gender}</p></div>
            <div className="col-md-2"><h5>Height</h5><p>{character.properties?.height}</p></div>
            <div className="col-md-2"><h5>Skin Color</h5><p>{character.properties?.skin_color}</p></div>
            <div className="col-md-2"><h5>Eye Color</h5><p>{character.properties?.eye_color}</p></div>
        </div>
    </div>
 )   
}

export default peopleInfo;