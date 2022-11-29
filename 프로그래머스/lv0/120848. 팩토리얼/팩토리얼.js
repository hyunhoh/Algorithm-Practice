function solution(n) {
    let integer = 1;
    let factorial = 1;
    
    while(factorial <= n) {
        integer++;
        factorial = integer * factorial;
    }
    
    return integer-1;
}