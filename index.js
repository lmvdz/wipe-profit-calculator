const calculate_profit = require('./calculate_profit.js');
calculate_profit(0, 25, 25, 1).then(profit => {
  console.log(`$ ${profit}`);
});
