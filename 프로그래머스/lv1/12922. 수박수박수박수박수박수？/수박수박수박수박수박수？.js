function solution(n) {
    let result = '';
    let i = 1;
    
    while(i <= n) {
        i % 2 ? result += '수' : result += '박'
        i++;
    }
    
    return result;
}