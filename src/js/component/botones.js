import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlayForwardSharp, IoPlayBackSharp } from "react-icons/io5";
import { CgPlayPauseO } from "react-icons/cg";
const Botones = (props) => {
	return (
		<>
			<div className="container">
				<button
					className="btn bg-dark btn-back"
					onClick={props.rewindSong}>
					<IoPlayBackSharp />
				</button>
				<button className="btn bg-dark btn-pause" onClick={props.pause}>
					<CgPlayPauseO />
				</button>
				<button className="btn bg-dark btn-play" onClick={props.play}>
					<FaPlay />
				</button>
				<button
					className="btn bg-dark btn-forward"
					onClick={props.nextSong}>
					<IoPlayForwardSharp />
				</button>
			</div>
		</>
	);
};

export default Botones;
