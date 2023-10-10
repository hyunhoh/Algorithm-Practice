/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    grid.map(row => row.sort((a,b) => b-a))

    let ans = 0

    for(let i=0; i<grid[0].length; i++) {
        let max = 0

        for(let j=0; j<grid.length; j++) {
            grid[j][i] > max ? max = grid[j][i] : max
        }

        ans += max
    }

    return ans
};