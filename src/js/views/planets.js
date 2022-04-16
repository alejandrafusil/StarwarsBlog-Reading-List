import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/planets.css"
import Planetsbg from "../../img/planets.jpeg";
import Planetimg from "../../img/planet.jpeg";



export const Planets = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
        <div className="contenedor">
            <img src={Planetsbg} className="card-img-top" alt="bg" />
            <div className="container">
                {store.planets.map((value, i) => (
                    <div key={i} className="card m-2 g-4 row flex-row bg-dark" style={{ width: "20rem", height: "35rem" }}>
                            <img src={Planetimg} className="card-img-top" alt="perfil" />
                            <div className="card-body">
                                <p className="text-card text-danger">Name: {value.name}</p>
                                <div className="cardbuttons">
                                    <Link className="btn btn-border border-danger ms-2 text-danger" to={"planetsdetails/" + value.uid}>
                                        Learn More!
                                    </Link>
                                    <button type="button" className="btn btn-border border-danger ms-2 text-danger" onClick={() => actions.addfavorites(value.name)}>
                                    <i className="far fa-heart"></i>
                                    </button>                             
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
