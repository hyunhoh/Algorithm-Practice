/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {

    let temp = Infinity
    let idx = -1

    for(let i=0; i<points.length; i++) {
        let [a, b] = points[i]

        if(a === x || b === y) {
            let dist = Math.abs(a - x) + Math.abs(b - y)

            if(dist < temp) {
                temp = dist
                idx = i
            }
        }
    }

    return idx
};