import React from "react";
import Vector from "../../assets/Vector.png";
import phone1 from "../../assets/phone1.png";
import envelope from "../../assets/envelope.png";

import "./forgot-password.styles.css";

function ForgotPassword() {
	return (
		<>
			<div class="vector">
				<a href="#">
					<img src={Vector} alt="email" />
				</a>
			</div>
			<div className="forgot-password">
				<form className="forgot-password-form">
					<p className="para1">
						<strong>Forgot password?</strong>
					</p>
					<p className="para2">Please enter the email address associated with your account.</p>

					<div className="entry">
						<img src={envelope} alt="envelope" className="envelope" />
						<input className="email-reset-input" type="email" name="email" placeholder="Enter your email address" />
						<button className="nextbutton">Next</button>
					</div>
				</form>
				<div className="image-div">
					<img src={phone1} alt="email" />
				</div>
			</div>
		</>
	);
}

export default ForgotPassword;
