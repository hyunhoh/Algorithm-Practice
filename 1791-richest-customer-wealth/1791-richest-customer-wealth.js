/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(e => e.reduce((acc, cur) => acc + cur, 0)))
};