import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-8 col-sm-8 col-md-8 mx-auto">
							<a
								href="https://www.crigroups.com"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textAlign:"left"
								}}>
								<img className="img-fluid" src={codepen} alt=""/>
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
								
							}}/>
							</a>
							<p
								
								style={{
									textAlign:"right"
								}}>
								<img className="img-fluid" src="http://cdn.onlinewebfonts.com/svg/img_322946.png" alt="" style={{
								borderRadius: 50 + "%",
								height: 25 + "px",
								width: 25 + "px",
								
							}}/>
								Toll free 1800 200 1234
							</p>
						</div>
					</div>
					<h5 className="pt-4">CRI PUMPS &copy; 2018 AWARD</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
