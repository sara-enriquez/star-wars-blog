import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn favs">Favs <i className="fa fa-heart text-danger" /></button>
				</Link>
			</div>
		</nav>
	);
};
