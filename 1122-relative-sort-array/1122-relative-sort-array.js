/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const front = arr2.map(e2 => arr1.filter(e1 => e1 === e2))

    const rear = arr1.filter(e => !arr2.includes(e)).sort((a,b) => a-b)

    return [...front, ...rear].flat()
};