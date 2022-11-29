function solution(i, j, k) {
    let sum = ''
    
    for(n=i; n<=j; n++) {
        sum += n;
    }
    
    return sum.split('').filter(ele => ele === String(k)).length;
}