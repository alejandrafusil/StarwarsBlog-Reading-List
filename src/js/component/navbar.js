import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import starwarslogo from "../../img/starwars-logo.jpeg";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src={starwarslogo} alt="" width="90" height="70" />
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav m-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link active text-secondary" >
								<span className="navbar-brand mb-0 h1">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Characters" className="nav-link text-secondary">
								<span className="navbar-brand mb-0 h1">Characters</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="nav-link text-secondary">
								<span className="navbar-brand mb-0 h1">Planets</span>
							</Link>
						</li>
					</ul>
					<div className="dropdown">
						<a className="nav-link dropdown-toggle text-secondary bg-transparent" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
							Favorites <Badge bg="transparent">{store.favorites.length}</Badge>
						</a>
						<ul className="dropdown-menu text-secondary" aria-labelledby="navbarDropdown">
							{store.favorites.map((value, key) => (
								<li><a key={key} className="dropdown-item" href="#/action-4">{value}{" "}
								<i onClick={() => actions.deletefavorites(key)} className="fas fa-trash-alt" /></a></li>
							))}
						</ul>
					</div>  
				</div>
			</div>
		</nav>
	);
};
