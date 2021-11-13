const calculate_profit = require('./calculate_profit.js');
calculate_profit().then(profit => {
  console.log(`$ ${profit}`);
});
