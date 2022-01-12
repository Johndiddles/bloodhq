import React from "react";
import "./check-email.styles.css";
import Vector from "../../assets/Vector.png";
import Emails from "../../assets/Emails.png";

function CheckEmail() {
	return (
		<>
			<div className="imagearrow">
				<a href="#">
					<img src={Vector} alt="email" />
				</a>
			</div>
			<div className="check-email">
				<div className="paratext">
					<p className="p1">
						<strong>Check your email</strong>
					</p>
					<p className="p2">A password reset link has just been sent to your email.</p>
					<p className="p3">Check your inbox and follow the link to reset your password.</p>

					<a href="#" className="mail">
						Go to Mail
					</a>
				</div>

				<div className="side-image">
					<img src={Emails} alt="email" />
				</div>
			</div>
		</>
	);
}

export default CheckEmail;
