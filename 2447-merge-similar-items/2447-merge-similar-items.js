/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const hash = {}
    const items = [...items1, ...items2]

    for(let item of items) {
        hash[item[0]] ? hash[item[0]] += item[1]: hash[item[0]] = item[1]
    }

    return Object.entries(hash)
};