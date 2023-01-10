function solution(n, m) {
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    let a = min;
    
    while(max % a !== 0 || min % a !== 0) {
        a--;
    }
    
    let b = max;
    
    while(b % max !== 0 || b % min !== 0) {
        b++;
    }
    
    return [a, b];
}