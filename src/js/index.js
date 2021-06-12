//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import PropTypes from "prop-types";

function MiContador(props) {
	return (
		<div className="counter mt-5 row justify-content-md-center mx-auto">
			<div className="clock m-5"></div>
			<div className="six col-1">{props.digitSix % 10}</div>
			<div className="five col-1">{props.digitFive % 10}</div>
			<div className="four col-1">{props.digitFour % 10}</div>
			<div className="three col-1">{props.digitThree % 10}</div>
			<div className="two col-1">{props.digitTwo % 10}</div>
			<div className="one col-1">{props.digitOne % 10}</div>
		</div>
	);
}

MiContador.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;

	//render your react application
	ReactDOM.render(
		<MiContador
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
