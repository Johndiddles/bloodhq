import React from "react";
import apple from "../../assets/apple.png";
import downloadr from "../../assets/downloadr.png";
import droned from "../../assets/droned.png";
import Group59 from "../../assets/Group59.png";
import Group61 from "../../assets/Group61.png";
import mobilelogin from "../../assets/mobilelogin.png";
import playgoogle from "../../assets/playgoogle.png";

import "./how-page.styles.css";

function HowPage() {
	return (
		<>
			<div class="how-page">
				<div class="upper-div">
					<div class="heading-div">
						<h1>
							Get your free
							<br />
							download of the
							<br />
							<strong>
								<span>BLOOD</span>
								<span class="hq">HQ</span>
							</strong>
							app
						</h1>
						<div class="buttons-div">
							<button class="store">
								<img src={apple} alt="apple logo" />
								<span class="text">
									<span class="text-one">Download on</span>
									<span class="text-two">App Store</span>
								</span>
							</button>
							<button class="store">
								<img src={playgoogle} alt="google play" />
								<span class="text">
									<span class="text-one">Download on</span>
									<span class="text-two">Play Store</span>
								</span>
							</button>
						</div>
					</div>
					<div class="phone-div">
						<img class="phone-one" src={Group61} alt="page one" />
						<img class="phone-two" src={Group59} alt="phone two" />
					</div>
				</div>
				<div class="lower-div">
					<div class="icons">
						<img src={mobilelogin} alt="register" />
						<p class="icons-texta">REGISTER</p>
						<p>Register and fill in your verification details</p>
					</div>

					<div class="icons">
						<img src={downloadr} alt="mobile app" />
						<p class="icons-texta">DOWNLOAD</p>
						<p>Download Mobile App</p>
					</div>

					<div class="icons">
						<img src={droned} alt="buy sell" />
						<p class="icons-texta">BUY/SELL</p>
						<p>Order and sell blood</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default HowPage;
