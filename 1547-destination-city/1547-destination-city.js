/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const hash = {}

    for(path of paths) {
        hash[path[0]] = path[1]
    }

    let start = paths[0][0]

    while(true) {
        if(hash[start]) {
            start = hash[start]
        } else {
            return start
        }
    }
};