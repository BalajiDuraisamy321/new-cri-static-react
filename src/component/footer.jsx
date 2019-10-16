import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" style={{
				height:10+"%",
				justifyContent:"center",
				textAlign:"center"
			}}>
				
					<div className="row">
						<div className="col-8 col-sm-8 col-md-8 mx-auto" style={{width:"auto",justifyContent:"center",justifyItems:"space-around"}}>
							<a
								href="https://www.crigroups.com"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textAlign:"left",
								
								}}>
								<img className="img-fluid" src={codepen} alt="" style={{
									marginRight:"auto"
								}}/>
							</a>
							<a
								className="px-3 "
								href="https://www.facebook.com/cripumps"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textAlign:"center"
								}}>
								<img className="img-fluid" src="https://www.pngix.com/pngfile/middle/10-103262_vector-facebook-icon-svg-hd-png-download.png" alt="" style={{
								borderRadius: 50 + "%",
								height: 25 + "px",
								width: 25 + "px",
								justifyContent:"space-around"
								
							}}/>
							</a>
							
								<img className="img-fluid" src="http://cdn.onlinewebfonts.com/svg/img_322946.png" alt="" style={{
								borderRadius: 50 + "%",
								height: 25 + "px",
								width: 25 + "px",
								marginLeft:"auto"
								
							}}/>
								
								<spam style={{marginTop:10+"px",fontSize:2+"vw",fontWeight:"bold"}}>Toll free 1800 200 1234</spam>
						</div>
					</div>
					<p className="pt-4">CRI PUMPS &copy; 2018 AWARD</p>
				
			</div>
		);
	}
}

export default Footer;
