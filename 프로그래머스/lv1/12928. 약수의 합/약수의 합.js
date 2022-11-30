function solution(n) {
    let i = 1;
    let result = 0;
    
    while(i <= n) {
        n % i === 0 ? result += i : false
        i++;
    }
    
    return result;
}