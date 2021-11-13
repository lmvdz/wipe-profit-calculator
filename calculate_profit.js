const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

module.exports = async function calculate_profit(starting_wipe = 30895, number_of_nfts = 25, number_of_weeks = 25, starting_week = 1) {
    const staking = 1.1
    const current_price = (await CoinGeckoClient.coins.fetch('wipemyass', {})).data.market_data.current_price.usd

    let current_wipe = 0;
    current_wipe += starting_wipe;
    
    const weekly_wipe_from_nfts = () => {
        return 3000 * number_of_nfts
    }
    

    for(let week_counter = starting_week; week_counter <= number_of_weeks; week_counter++) {
        current_wipe = (staking * current_wipe) + weekly_wipe_from_nfts()
    }
    return Number(current_wipe * current_price).toFixed(2);
}
