import React from "react";
import PropTypes from "prop-types";
import myImage from "../img/logo.png";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5" >
				
				
				
				<div style={{
				fontSize:12+"px",
				marginLeft:50+"px"}}>
						
						
					
					
				  
					<span>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</span> <br/>

                   <p style={{marginTop:10+"px"}}> CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP |                     MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL		</p>
				</div>	
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
