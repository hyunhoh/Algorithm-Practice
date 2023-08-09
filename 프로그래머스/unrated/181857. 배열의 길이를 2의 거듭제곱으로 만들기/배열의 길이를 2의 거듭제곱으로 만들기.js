function solution(arr) {
    let length = 1;
    
    while(length < arr.length) {
        length *= 2;
    }
    
    return length === arr.length ? arr : [...arr, ...Array(length - arr.length).fill(0)]
}