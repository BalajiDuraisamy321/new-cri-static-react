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
				<div className="row">
					<div className="col-8 col-sm-8 col-md-8 mx-auto">
						<p
						style={{fontWeight:"bolder",
						fontSize:10+"px",
						
						marginTop:10+"px"}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							
						</h1>
						<img
							className={"img-fluid " + this.props.fadeInLeft}
							src={myImage}
							alt=""
							style={{
								
								height: 250 + "px",
								width: 1000 + "px",
								
							}}
						/>
						 <p className="theory" style={{
									textAlign:"center"
								}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
					<br/>
							</p>
					</div>
					<div className="A">

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
