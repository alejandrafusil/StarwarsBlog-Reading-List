import React, { Component } from "react";
import "../../styles/footer.css";  

export const Footer = () => (
	<footer className="container-fluid footer">
		<div className="row d-flex justify-content-center text-center">
			<a className="col-2" href="https://github.com/alejandrafusil">
				alejandrafusil <i className="fab fa-github" />
			</a>
		</div>
		<div className="row slogan d-felx align-items-center">
			<i className="fab fa-jedi-order fa-2x" />
		</div>
	</footer>
);

