function solution(n) {
    let result = 0;
    
    for(i=2; i<=n; i++) {
        for(j=2; j<=i-1; j++) {
            if(i % j === 0) {
                result++;
                break;
            }
        }
    }
    
    return result;
}