/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const hash = {}

    for(path of paths) {
        hash[path[0]] ? hash[path[0]] += 1 : hash[path[0]] = 1
        hash[path[1]] ? hash[path[1]] -= 1 : hash[path[1]] = -1
    }

    for(key in hash) {
        if(hash[key] === -1) return key
    }
};