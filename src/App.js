import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.components";
import Footer from "./components/footer/footer.components";
// import About from './components/about/about.component';

import AboutPage from "./pages/about/about.component";
import How from "./pages/how/how.components";
import CreateAccount from "./pages/createAccount/createAccount.components";
import LoginForm from "./pages/login/login.component";
import Bloods from "./pages/bloods/bloods.component";
import Inventory from "./pages/inventory/inventory.component";
import forgotpassword from "./pages/forgotpassword/forgot-password.component";
import setpassword from "./pages/setpassword/set-password.component";
import checkemail from "./pages/checkemail/check-email.component";
import whyPage from "./pages/whypage/why-page.component";
import howpage from "./pages/howpage/how-page.component";
import Cart from "./pages/cart/cart.component";
import cartpage from "./pages/cartpage/cart-page.component";
import profilepage from "./pages/profilepage/profile-page.component";
import Checkout from './pages/checkout/checkout.component';
import paymentData from './components/flutterwave/flutterwave.component'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" component={homepage} exact />
				<Route path="/index" component={homepage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/createaccount" component={CreateAccount} />
				<Route path="/how" component={How} />
				<Route path="/signin" component={LoginForm} />
				<Route path="/bloods" component={Bloods} />
				<Route path="/inventory" component={Inventory} />
				<Route path="/forgot-password" component={forgotpassword} />
				<Route path="/set-password" component={setpassword} />
				<Route path="/check-email" component={checkemail} />
				<Route path="/cart" component={Cart} />
				<Route path="/why" component={whyPage} />
				<Route path="/how-page" component={howpage} />
				<Route path="/cart-page" component={cartpage} />
				<Route path="/profile-page" component={profilepage} />
				<Route path="/checkout" component={Checkout} />
				<Route path='/payment' component={paymentData} />
			</Switch>

			<Footer />
		</div>
	);
}

export default withRouter(App);
