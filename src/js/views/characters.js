import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characters.css";
import Charactersbg from "../../img/charactersbg.jpeg";
import Charactersimg from "../../img/personajes.jpeg";


export const Characters = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters();
    }, []);
    return (
        <div className="contenedor">
            <img src={Charactersbg} className="card-img-top" alt="bg" />
            <div className="container">
                {store.characters.map((value, i) => (
                    <div key={i} className="card m-2 g-4 row flex-row bg-dark" style={{ width: "20rem", height: "45rem" }}>
                            <img src={Charactersimg} className="card-img-top" alt="perfil" />
                            <div className="card-body">
                                <p className="text-card text-danger">Name: {value.name}</p>
                                <div className="cardbuttons">
                                    <Link className="btn btn-border text-danger border-danger ms-2" to={"charactersdetails/" + value.uid}>
                                        Learn More!
                                    </Link>
                                    <button type="button" className="btn btn-border text-danger border-danger ms-2" onClick={() => actions.addfavorites(value.name)}>
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