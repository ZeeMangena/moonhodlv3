import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Apollo client in action, now I need to build the server
const client = new ApolloClient({
	uri: "http://localhost:4000/", //JSON Object (List of values)
	cache: new InMemoryCache(), //put into local storage
});

//Time to FETCH the data from the cache into a list I can use
/*const COIN_DATA = useQuery(getCoinData);
client
	.query(
		coin
	)
	.then((result) => console.log(result));*/

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

//The challenge will be stepping up from ASP.Net + SQL experience. Finding the crossover...

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
