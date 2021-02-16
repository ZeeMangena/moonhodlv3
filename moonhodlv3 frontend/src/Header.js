import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
	const [{ hidden }] = useStateValue();
	//user in state. Via backend? Defintely not my usual Firebase Auth implemantation

	//OnClick function that clears the hidden list. Delete server data via the API??

	return (
		<div className="header">
			<Link to="/">
				<img className="header__logo" src="moonhodl.jpg" alt="" />
			</Link>

			<div className="header__nav">
				<div className="header__option">
					<button className="header__unhide">Unhide All Coin</button>
				</div>
			</div>
		</div>
	);
}
/* Commented out user login. I found a way to make the state persist through reloads, far less hassle than building a bespoke Authentication system (server, security etc.)
<div className="header__option">
<span className="header__optionLineOne">Hello Guest</span>
<Link to="/login">
	<span className="header__optionLineTwo">Sign In</span>
</Link>
</div>*/
export default Header;
