/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b)

    let min = Infinity

    for(let i=1; i<arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i-1])

        if(diff < min) min = diff
    }

    const ans = []

    for(let i=1; i<arr.length; i++) {
        if(arr[i] - min === arr[i-1]) ans.push([arr[i-1], arr[i]])
    }

    return ans

};