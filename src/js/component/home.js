import React from "react";

//create your first component
export function Home() {
	return (
		<div className="counter mt-5 row justify-content-md-center mx-auto">
			<div className="clock m-5"></div>
			<div className="col-1">0</div>
			<div className="col-1">0</div>
			<div className="col-1">0</div>
			<div className="col-1">0</div>
			<div className="col-1">0</div>
			<div className="col-1">0</div>
		</div>
	);
}
