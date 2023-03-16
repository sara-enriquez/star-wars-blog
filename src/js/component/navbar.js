import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const {store, actions} = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <button className="btn-logo">
        <img
          className="logo"
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
        />
        </button>
      </Link>
      <div className="ml-auto">
        <Link to="*">
          <button className="btn favs">
            Favs <i className="fa fa-heart" />
          </button>
        </Link>
      </div>
    </nav>
  );
};
