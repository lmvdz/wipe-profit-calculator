const calculate_profit = require('./calculate_profit.js');
// calculate_profit(starting_wipe, number_of_nfts, number_of_weeks, starting_week)
calculate_profit(30000, 25, 25, 2).then(profit => {
  console.log(`$ ${profit}`);
});
