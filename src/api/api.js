import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',

});

export const api = {
    addCoinApi() {
        return instance.get(`/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`, {})
    },
    addUniqueCoinApi(id) {
        return instance.get(`/${id}`, {})
    },

};