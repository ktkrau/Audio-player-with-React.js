import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlayForwardSharp, IoPlayBackSharp } from "react-icons/io5";
const Botones = () => {
	return (
		<>
			<div className="footer-botones">
				<button id="btn-back">
					<IoPlayBackSharp />
				</button>
				<button id="btn-play">
					<FaPlay />
				</button>
				<button id="btn-forward">
					<IoPlayForwardSharp />
				</button>
			</div>
		</>
	);
};

export default Botones;
