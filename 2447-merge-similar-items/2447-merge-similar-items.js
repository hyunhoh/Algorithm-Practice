/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const hash = {}
    const ret = []

    for(let item of items1) {
        hash[item[0]] = item[1]
    }

    for(let item of items2) {
        hash[item[0]] ? hash[item[0]] += item[1] : hash[item[0]] = item[1]
    }

    for(key in hash) {
        ret.push([key, hash[key]])
    }

    return ret.sort((a,b) => a[0] - b[0])
};