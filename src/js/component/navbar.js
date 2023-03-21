import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/">
          <button className="btn-logo">
            <img
              className="logo"
              src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
            />
          </button>
        </Link>
        <div className="ml-auto">
          <div class="collapse navbar-collapse" id="navbarDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown favs">
                <button
                  class="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favs <i className="fa fa-heart" />
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  {store.favorites.length == 0 ? (
                    <li className="no-favs">No Favs</li>
                  ) : (
                    store.favorites.map((favorite) => (
                      <li className="favorite">
                        {favorite}
                        <button className="btn remove-favorite-btn"
                          onClick={() => {
                            actions.removeFavorites(favorite);
                            console.log(store.favorites);
                          }}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
