import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <img id="img-card" src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="card-buttons">
          <Link to="/demo">
            <button className="btn">Learn more</button>
          </Link>
          <Link to="/single">
            <button className="btn">
              <i className="fa-solid fa-heart"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
