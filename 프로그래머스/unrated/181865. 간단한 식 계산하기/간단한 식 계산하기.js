function solution(binomial) {
    const arr = binomial.split(' ')
    
    if(arr[1] === '+') return +arr[0] + +arr[2]
    if(arr[1] === '-') return arr[0] - arr[2]
    if(arr[1] === '*') return arr[0] * arr[2]
}