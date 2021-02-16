import { schema } from "./schema";
import { CoinLoreAPI, resolvers } from "./resolver";

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
	schema,
	resolvers,
	dataSources: () => {
		return {
			coinLoreAPI: new CoinLoreAPI(),
		};
	},
	context: () => {
		return {
			token: "foo",
		};
	},
});

export default server;
