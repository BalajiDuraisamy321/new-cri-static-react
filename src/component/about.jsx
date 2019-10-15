import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/logo.png";
import browser from "../img/1.png";
import myImage from "../img/2.png";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5" style={{
					height:70+"%",
					marginTop: 0 + "rem"
				}}>
				
				        <img
							className={"img-fluid " + this.props.fadeInLeft}
							src={pen}
							alt=""
							style={{
								
								height: 250 + "px",
								width: 250 + "px",
								marginTop: 0 + "rem"
							}}
						/>
						
				

				
				
				<div className="row" style={{ marginTop: 0 + "rem" }}>
					<div className="col-6 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeInRight}
							src={browser}
							alt=""
							style={{
								
								height: 700 + "px",
								width: 300 + "px"
							}}
						/>
						
					</div>
					
						<div className="col-6 col-lg-6 hidden">
					        <p className={"mytext pt-3 " + this.props.fadeInRight} style={{
						        fontSize:12+"px",
						        marginLeft:10+"px"}}>
							                    <h1 style={{
						        fontSize:12+"px",
						        marginLeft:10+"px",
						        fontWeight:"bolder"}}>
					                                 C.R.I. PUMPS<br />&apos;WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
						                                &apos;
						                                <br />for the 4th time.
					                            </h1>
							  <ul>
						       <li> C.R.I.'s energy efficient products are well recognized by             various Government Institutions, as trustworthy products for          various projects across the globe to save energy.
                                </li> 
								<li>
									 C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
								</li>	 
							  </ul>	
                              <br/>
							
						    </p>
					          
						  <img
							className={"img-fluid " + this.props.fadeInLeft}
							src={myImage}
							alt=""
							style={{
								
								height: 400 + "px",
								width: 500 + "px"
							}}
						  />
						   <p className={"mytext pt-3 " + this.props.fadeIn}><p className={"mytext pt-3 " + this.props.fadeIn} style={{
						   fontSize:12+"px",
						   marginLeft:10+"px"}}>
						   Government of India has awarded the
						   <span style={{fontWeight:2 + "px"}} style={{
						   fontSize:12+"px",
						   marginLeft:10+"px"}}>"National Energy Conservation Award 2018".
						   </span>
						    Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
						
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
