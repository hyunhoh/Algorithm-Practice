function solution(x, n) {
    let result = [];
    
    for(i=1; i<=n; i++) {
        result = [...result, x * i];
    }
    
    return result;
}