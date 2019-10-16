import React from "react";
import PropTypes from "prop-types";
import myImage from "../img/logo.png";

export default class Contact extends React.Component {
	render() {
		return (
			
				
				
				
				<div style={{
				       fontSize:12+"px",
				       fontSize:0.9+"vw",
					   marginLeft:35+"px",
					   textAlign:"center"
					}}>
						
						
					
						<h1 style={{
							fontSize:1.5+"vw",
							width:"auto",
						    fontWeight:"bolder",}}>
					                                C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
					    </h1>	
				    <p style={{marginTop:10+"px",fontSize:0.9+"vw",fontWeight:"bold"}}>
					    CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP |                     MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL	
					</p>
				</div>	
			
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string,
	bounceLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
	
};
