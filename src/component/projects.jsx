import React from "react";
import Vmarine from "../img/ToBeConverted.png";
import aguaDeLuz from "../img/ToBeConverted.png";
import myImage
 from "../img/3.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							ITEMS
						</h1>
						<img
							className={"img-fluid " + this.props.fadeInLeft}
							src={myImage}
							alt=""
							style={{
								
								height: 100% + "px",
								width: 100% + "px"
							}}
						/>
						 <p className="theory" style={{
									textAlign:"center"
								}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
					<br/>
							</p>
					</div>
					
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
