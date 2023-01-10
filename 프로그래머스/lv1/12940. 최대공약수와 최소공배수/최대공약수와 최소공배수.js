function solution(n, m) {
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    let GCD = min;
    
    while(max % GCD !== 0 || min % GCD !== 0) {
        GCD--;
    }
    
    let LCM = max;
    
    while(LCM % max !== 0 || LCM % min !== 0) {
        LCM++;
    }
    
    return [GCD, LCM];
}