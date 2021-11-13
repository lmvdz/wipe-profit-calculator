const calculate_profit_using_current_price = require('./calculate_profit.js');

calculate_profit_using_current_price('wipemyass', 393000, 10, 1, 107, 25, 2, 'usd').then(calculation => {
  if (calculation.error) {
    console.error(error);
    console.log(`Total $${calculation.symbol.toUpperCase()}:\t ${calculation.total_token}`)
  } else {
    console.log(`Start $${calculation.symbol.toUpperCase()}:\t ${calculation.starting_token}`)
    console.log(`NFT Count:\t ${calculation.number_of_nfts}`)
    console.log(`Total $${calculation.symbol.toUpperCase()} (min - max):\t ${calculation.least_token} - ${calculation.most_token}`)
    console.log(`Price (${calculation.denomination.toUpperCase()}):\t\t\t $ ${calculation.current_price}`)
    console.log(`Total ${calculation.denomination.toUpperCase()} (min - max):\t\t $ ${calculation.profit_least} - ${calculation.profit_most}`)
  }
})
