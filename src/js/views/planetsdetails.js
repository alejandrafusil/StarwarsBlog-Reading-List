import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import Planetimg from "../../img/Planetimg.jpg";
import "../../styles/planetsdetails.css"


export const Planetsdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanetsdetails(params.id);
	}, []);
	if (store.planetsdetails) {
	return (
		<div className="container contenedor">
			<div className="card m-2 bg-dark" style={{ width: "30rem" }}>
				<img src={Planetimg} className="card-img-top"/>
				<div className="card-body">
					<h1 className="card-title text-danger">{store.planetsdetails.properties.name}</h1>{" "}
					<p>
						<strong>Diametro:</strong> {store.planetsdetails.properties.diameter}
					</p>
					<p>
						<strong>Periodo de Rotación:</strong> {store.planetsdetails.properties.rotation_period}
					</p>
					<p>
						<strong>Periodo Orbital:</strong> {store.planetsdetails.properties.orbital_period}
					</p>
					<p>
						<strong>Gravedad:</strong> {store.planetsdetails.properties.gravity}
					</p>
					<p>
						<strong>Población:</strong> {store.planetsdetails.properties.population}
					</p>
					<p>
						<strong>Clima:</strong> {store.planetsdetails.properties.climate}
					</p>
					<p>
						<strong>Tipo de Terreno:</strong> {store.planetsdetails.properties.terrain}
					</p>
					<p>
						<strong>Agua Superficial:</strong> {store.planetsdetails.properties.surface_water}
					</p>
					<div className="boton">
						<Link className="btn btn-dark bg-danger" to={"/planets"}>
							Back
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
	} else {
		return <div>Cargando datos...</div>;
	}
};
