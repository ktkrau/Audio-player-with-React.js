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
	return (
		<>
			<ul>
				{songs.length > 0 ? (
					songs.map((song) => <li key={song.id}>{song.name}</li>)
				) : (
					<li>Listado vacío</li>
				)}
			</ul>
		</>
	);
};
export default Listacanciones;
