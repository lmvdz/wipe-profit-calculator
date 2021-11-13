const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

module.exports = function calculate_profit_using_current_price(coin_id = 'wipemyass', starting_token = 30895, staking_reward = 1.1, staking_reward_weekly_interval = 1, number_of_nfts = 25, number_of_weeks = 25, starting_week = 1, denomination = 'usd') {
    return new Promise(function(resolve, reject) {
        let errors = []
        if (starting_token < -1) {
            errors.push('starting_token has to be greater than or equal to zero.')
        }
        if (number_of_nfts > 3000 || number_of_nfts < 0){
            errors.push('number_of_nfts has to be greater than or equal to zero and less than three thousand.')
        }
        if (number_of_weeks > 25 || number_of_weeks < 1) {
            errors.push('number_of_weeks has to be between 1 and 25 (inclusive).');
        }
        if (starting_week > 25 || starting_week < 1) {
            errors.push('starting_week has to be between 1 and 25 (inclusive).')
        }
        if (errors.length > 0) {
            errors.forEach(error => {
                console.error(error);
            })
            reject(new Error('Failed to calculate the profit, check your parameters'));
        }
        
        const weekly_token_from_nfts = () => {
            return (3000 * number_of_nfts)
        }

        const weekly_token_50k = () => {
            return (2000)
        }
        
        let least_amount_of_wipe = 0 + starting_token;
        for(let week_counter = starting_week; week_counter <= number_of_weeks; week_counter++) {
            if (week_counter % staking_reward_weekly_interval === 0) {
                least_amount_of_wipe *= (1 + (1 / staking_reward))
            }
            least_amount_of_wipe += weekly_token_from_nfts()
            if (least_amount_of_wipe > 50000)
                least_amount_of_wipe += weekly_token_50k()
        }
        let most_amount_of_wipe = 0 + starting_token;
        for(let week_counter = starting_week; week_counter <= number_of_weeks; week_counter++) {
            most_amount_of_wipe += weekly_token_from_nfts()
            if (most_amount_of_wipe > 50000)
                most_amount_of_wipe += weekly_token_50k()
            if (week_counter % staking_reward_weekly_interval === 0) {
                most_amount_of_wipe *= (1 + (1 / staking_reward))
            }
        }

        CoinGeckoClient.coins.fetch(coin_id, {}).then(response => {
            const current_price = response.data.market_data.current_price[denomination]
            resolve({ symbol: response.data.symbol, denomination: denomination, number_of_nfts: number_of_nfts, starting_token: starting_token, least_token: least_amount_of_wipe, most_token: most_amount_of_wipe, current_price: current_price, profit_most: Number(most_amount_of_wipe * current_price), profit_least: Number(least_amount_of_wipe * current_price), error: null});
        }).catch(error => {
            console.error(error);
            resolve({ symbol: response.data.symbol, denomination: denomination, number_of_nfts: number_of_nfts, starting_token: starting_token, least_token: least_amount_of_wipe, most_token: most_amount_of_wipe, current_price: null, profit_most: null, error: new Error('Failed to retrieve current_price from coingecko')})
        })
        
    })
    
}
