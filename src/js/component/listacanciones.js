import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Listacanciones = () => {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		getSongs();
	}, []);
	const getSongs = () => {
		fetch("https://assets.breatheco.de/apis/sound/songs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				console.log(response.ok);
				return response.json();
			})
			.then((info) => {
				console.log(info);
				setSongs(info);
			});
		console.log("Hola");
	};
	return <h1>Hola React</h1>;
};
export default Listacanciones;
