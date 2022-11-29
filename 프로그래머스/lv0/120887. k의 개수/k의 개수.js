function solution(i, j, k) {
    let sum = ''
    
    for(i; i<=j; i++) {
        sum += i;
    }
    
    return sum.split('').filter(ele => ele === String(k)).length;
}