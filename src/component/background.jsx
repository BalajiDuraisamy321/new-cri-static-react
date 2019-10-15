import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<p style={{
				backgroundColor:"red",
				width:99+"%",
				marginLeft:3+"px",
				height:1+"%",
				fontSize:1.3+"px"
			}}>.           </p>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
