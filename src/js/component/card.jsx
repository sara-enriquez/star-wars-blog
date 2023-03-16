import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = (props) => {
  const {store, actions} = useContext(Context);
  return (
    <div className="card">
      <img id="img-card" src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="card-buttons">
          <Link to = {`/${props.type}/${props.id}`}>
            <button className="btn">Learn more</button>
          </Link>
            <button className="btn" onClick={() => {actions.addFavorites(props.name)}}>
              <i className="fa-solid fa-heart" ></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
