import React from "react";
import Counter from "../../components/counter/counter.component";

import GroupChat from "../../assets/GroupChat.png";
import Locationtracking from "../../assets/Locationtracking.png";
import Rectangle from "../../assets/Rectangle.png";
import Timeline from "../../assets/Timeline.png";

import "./why-page.styles.css";

function WhyPage() {
	return (
		<>
			<div className="whypage">
				<div className="dronedelivery">
					<div className="dd1">
						<h1>First Autonomous drone delivery system</h1>
						<p className="dd1p">
							We help save lives by ensuring blood supplies and donated blood reaches patients on
							times
						</p>
						<Counter />
						{/* <div className="cpr">
							<div className="thirty">
								<h2>30+</h2>
								<p>CITIES</p>
							</div>
							<div className="two-fifty">
								<h2>250+</h2>
								<p>PARTNERS</p>
							</div>
							<div className="one-thousand">
								<h2>1000+</h2>
								<p> DRONES</p>
							</div>
						</div> */}
					</div>
					<div className="dd2">
						<div className="droneimage">
							<img src={Rectangle} alt="" className="rectangledrone" />
						</div>
						<form className="droneform">
							<h1>Want to know more?</h1>
							<div className="forminputs">
								<div className="nameinput">
									<label className="why-labels" htmlFor="name">Name</label>
									<input
										type="text"
										id="name"
										placeholder="Enter your name..."
										className="whyinputs"
									/>
								</div>

								<div className="emailinput">
									<label className="why-labels" htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										placeholder="Enter your email..."
										className="whyinputs"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div className="emergencyblood">
					<div className="eb1">
						<h4>Emergency blood transportation made easy</h4>
						<p>
							our app is optimized for efficiency and ease. blood transportaion for emergency
							situations to save lives made easy
						</p>
					</div>

					<div className="eb2">
						<div className="cs">
							<div className="csimage">
								<img src={GroupChat} alt="" />
							</div>
							<div className="cstext">
								<h5>Community support</h5>
								<p>
									Our wide range community support helps with questions and answers regarding using
									the app
								</p>
							</div>
						</div>

						<div className="tr">
							<div className="trimage">
								<img src={Timeline} alt="" />
							</div>
							<div className="trtext">
								<h5>Timeline & Records</h5>
								<p>
									We ensure that your package is delivered on time as well as records and rating of
									all transactions
								</p>
							</div>
						</div>

						<div className="rt">
							<div className="rtimage">
								<img src={Locationtracking} alt="" />
							</div>
							<div className="rttext">
								<h5>Real time tracking</h5>
								<p>
									Using Google maps we help users track drone location andget to know blood bank in
									their immediate vicinity
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyPage;
