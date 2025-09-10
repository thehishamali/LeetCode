/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let curr = prices[i];

        if (curr < minPrice) minPrice = curr;
        else {
            let profit = curr - minPrice;

            if (profit > maxProfit) maxProfit = profit;
        }
    }

    return maxProfit;
};