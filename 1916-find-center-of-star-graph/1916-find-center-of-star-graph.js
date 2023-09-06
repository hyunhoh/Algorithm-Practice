/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const hash = edges.reduce((acc, cur) => {
        acc[cur[0]] ? acc[cur[0]] += 1 : acc[cur[0]] = 1
        acc[cur[1]] ? acc[cur[1]] += 1 : acc[cur[1]] = 1
        return acc
    }, {})

    for(let key in hash) {
        if(hash[key] === edges.length) return key
    }
}