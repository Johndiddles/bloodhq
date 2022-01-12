import React from "react";
import "./set-password.styles.css";
import Vector from "../../assets/Vector.png";

function SetPassword() {
	return (
		<>
			<div className="savepassword">
				<a href="#">
					<img src={Vector} alt="" className="arrowimage" />
				</a>
				<form className="form">
					<h1>Set New Password</h1>
					<input type="text" placeholder="New Password" className="input input-cpwd" />
					<input type="text" placeholder="Confirm Password" className="input-cpwd" />
					<button className="savebutton">Save</button>
				</form>
			</div>
		</>
	);
}

export default SetPassword;
