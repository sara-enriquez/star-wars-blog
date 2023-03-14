import React, { Component } from "react";

const Card = (props) => {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.fact1}</h5>
          <button className="btn btn-primary">Learn more</button>
          <button className="btn btn-warning"><i class="fa-solid fa-heart"></i></button>
        </div>
      </div>
    </>
  );
};


