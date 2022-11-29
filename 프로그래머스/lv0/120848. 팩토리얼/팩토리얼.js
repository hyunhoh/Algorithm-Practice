function solution(n) {
    let int = 1;
    let fac = 1;
    
    while(fac <= n) {
        int++;
        fac = int * fac;
    }
    
    return int-1;
}