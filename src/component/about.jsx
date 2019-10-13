import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/1.png";
import myImage from "../img/2.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					AWARDS
				</h1>
				

				
				
					<div className="row" style={{ marginTop: 7 + "rem" }}>
					 <div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeInLeft}
							src={myImage}
							alt=""
							style={{
								
								height: 400 + "px",
								width: 500 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
						 Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
						</p>
					 </div>
					 <div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeInRight}
							src={browser}
							alt=""
							style={{
								
								height: 400 + "px",
								width: 200 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
						Government of India has awarded the <br/>
						<span style={{fontWeight:2 + "px"}}>"National Energy Conservation Award 2018".
						</span>
						</p>
					 </div>
					 
					</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
