import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	//BEM naming convention used
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Header />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}
/*
					<Route path="/login">
						<Login />
					</Route>
*/
export default App;
