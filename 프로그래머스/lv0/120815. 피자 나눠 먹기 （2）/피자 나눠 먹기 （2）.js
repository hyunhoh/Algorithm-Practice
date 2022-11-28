function solution(n) {
    let slice = 6;
    
    while(slice % 6 !== 0 || slice % n !== 0) {
        slice += 1;
    }
    
    return slice / 6;
}