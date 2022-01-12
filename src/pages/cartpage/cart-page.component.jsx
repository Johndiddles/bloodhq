import React from "react";
import imageProduct from "../../assets/imageProduct.png";
import imageProduct2 from "../../assets/imageProduct2.png";
import imageProduct3 from "../../assets/imageProduct3.png";
import cart from "../../assets/cart.png";

import "./cart-page.styles.css";

function CartPage() {
	return (
		<>
			<div className="cartpage1">
				<div className="page1cart cart1">
					<div className="cartdiv1page1 cartmove">
						<h1>GENERAL HOSPITAL</h1>
						<img src={imageProduct} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>

				<div className="page1cart cart2">
					<div className="cartdiv1page1 cartmove">
						<h1>HOPE HOSPITAL</h1>
						<img src={imageProduct2} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>

				<div className="page1cart">
					<div className="cartdiv1page1 cartmove">
						<h1>DECHI BLOODBANK</h1>
						<img src={imageProduct3} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>
			</div>

			<div className="cartpage2">
				<div className="page1cart cart1">
					<div className="cartdiv1page1 cartmove">
						<h1>GENERAL HOSPITAL</h1>
						<img src={imageProduct} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>

				<div className="page1cart cart2">
					<div className="cartdiv1page1 cartmove">
						<h1>HOPE HOSPITAL</h1>
						<img src={imageProduct2} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>

				<div className="page1cart">
					<div className="cartdiv1page1 cartmove">
						<h1>DECHI BLOODBANK</h1>
						<img src={imageProduct3} alt="blood" />
					</div>

					<div className="cartdiv2page1">
						<div className="paragraphcart1">
							<p>
								<span className="spanA">
									<strong>A+</strong>
								</span>
								<span>STOCK:</span>
								<span className="cartnumber">8</span>
								<span>SOLD:</span>
								<span className="cartnumber">4</span>
							</p>
						</div>

						<div className="paragraphcart2">
							<p>
								<span>NGN</span>
								<span className="fourteen-thousand">
									<strong>14,000</strong>
								</span>
							</p>
							<img src={cart} alt="cart" className="cartimg" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CartPage;
