function solution(n, k) {
    const result = [];
    let i = 1;
    
    while(k * i <= n) {
        result.push(k * i)
        i++;
    }
    
    return result;
}