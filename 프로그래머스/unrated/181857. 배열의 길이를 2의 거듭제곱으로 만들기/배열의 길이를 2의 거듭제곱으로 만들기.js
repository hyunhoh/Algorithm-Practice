function solution(arr) {
    let length = 1;
    
    while(length < arr.length) {
        length *= 2;
    }
    
    return [...arr, ...Array(length - arr.length).fill(0)]
}