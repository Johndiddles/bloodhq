import React from "react";
import profileimage from "../../assets/profileimage.png";
import Vector from "../../assets/Vector.png";

import "./profile-page.styles.css";

function ProfilePage() {
	return (
		<>
			<div className="profilepage">
				<div className="profilearrow">
					<img src={Vector} alt="arrow" />
				</div>
				<div className="profilepagedivs">
					<div className="profileimagediv1">
						<img src={profileimage} alt="" />
					</div>

					<div className="profileimagediv2">
						<div className="profileinput1 pi">
							<label>
								<strong>Username</strong>
							</label>
							<input type="text" placeholder="ST. Benedict" className="st" />
						</div>

						<div className="profileinput2 pi">
							<label>
								<strong>Description</strong>
							</label>
							<textarea name=""></textarea>
						</div>

						<button>Done</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfilePage;
