function solution(n) {
    let int = 1;
    let fac = 1;
    
    while(fac <= n) {
        int++;
        fac *= int;
    }
    
    return int - 1;
}