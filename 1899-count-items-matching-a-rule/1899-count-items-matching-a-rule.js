/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const map = {
        type: 0,
        color: 1,
        name: 2
    }
    
    return items.reduce((acc, cur) => cur[map[ruleKey]] === ruleValue ? acc + 1 : acc, 0)
};