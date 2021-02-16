const { gql } = require("apollo-server");

const schema = gql`
	type Coin {
		id: String!
		name: String!
		symbol: String!
	}

	type CoinDetails {
		id: String!
		rank: Int!
		price_usd: String!
		percent_change_24h: String!
		percent_change_1h: String!
		percent_change_7d: String!
		price_btc: String!
		market_cap_usd: String!
		volume24: float!
		volume24a: float!
		csupply: String!
		tsupply: String!
		msupply: String!
	}

	type Query {
		getCoinData(id: String!): Coin!
		getCoinDetails(id: String!): CoinDetails!
	}
`;
export default schema;
