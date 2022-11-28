function solution(array) {
    let sortedArr = array.sort(function (a, b) {
        return a - b;
    })
    
    return sortedArr[Math.floor(array.length/2)];
    
}