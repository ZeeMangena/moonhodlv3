const { RESTDataSource } = require("apollo-datasource-rest");
class CoinLoreAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://api.coinlore.net/api/";
	}

	async getCoinData(limit = 20) {
		const data = await this.get("tickers/", {
			per_page: limit, //Paginating all coins, for general digestibilty by the app
			order_by: "rank",
		});
		return data.results;
	}

	async getCoinDetails(id) {
		return this.get(`coin/markets?id=${id}`); //Resolving individual Coin Details
	}
}

export const resolvers = {
	Query: {
		tickers: async (_source, _args, { dataSources }) => {
			return dataSources.coinLoreAPI.getCoinData();
		},
		coin: async (_source, { id }, { dataSources }) => {
			return dataSources.coinLoreAPI.getCoinDetails(id);
		},
	},
};
