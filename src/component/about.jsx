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
			
			<div style={{
				height:0+"vm",
				marginTop: 0 + "rem",
				width:96+"%",
				
				
			}}>
					<div style={{
						
						width:"auto"
					}}> <img
							className={"img-fluid " + this.props.fadeInLeft}
							src={pen}
							alt=""
							style={{
								
								height: "auto",
								
								display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: 25+"%",
							}}
						/>
					</div>
				
				       
						
				

				
				
				<div className="row" style={{ marginTop: 0 + "rem",width:"auto" }}>
					<div className="col-6 col-lg-6 hidden" style={{ marginTop: 0 + "rem",width:30+"%" }}>
						<img
							className={"img-fluid " + this.props.fadeInRight}
							src={browser}
							alt=""
							style={{
								marginLeft:26+"%",
								height: "auto",
								width: 65+"%",
								
							}}
						/>
						
					</div>
					
						<div className="col-6 col-lg-6 hidden" style={{width:120+"%",height:1+"vm" }}>
					        <p className={"mytext pt-3 " + this.props.fadeInRight} style={{
						        fontSize:0.9+"vw"
						        }}>
							                    <h1 style={{
								fontSize:0.9+"vw",
								width:"auto",
						        
						        fontWeight:"bolder"}}>
					                                 C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
													          for the 4th time.
					                            </h1>
							  <ul >
						       <li style={{fontSize:0.8+"vw",}}>
								   C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
								   
                               </li> 
								<li style={{fontSize:0.8+"vw",}}>
									 C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
									 
								</li>	 
							  </ul>	
                              
							
						    </p>
					          
						  <img
							className={"img-fluid " + this.props.fadeInLeft}
							src={myImage}
							alt=""
							style={{
								marginTop:10+"vm",
								height: "auto",
								width: "auto"
							}}
						  />
						   <p className={"mytext pt-3 " + this.props.fadeIn} style={{fontSize:0.7+"vw",}}>
						   Government of India has awarded the
						   <span style={{fontWeight:"bold",fontSize:0.9+"vw",}}>"National Energy Conservation Award 2018".
						   </span>
						    Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
						
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
