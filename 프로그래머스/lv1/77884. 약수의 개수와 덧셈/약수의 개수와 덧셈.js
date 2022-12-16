function solution(left, right) {
    let result = 0;
    
    for(i=left; i<=right; i++) {
        Number.isInteger(Math.sqrt(i)) ? result -= i : result += i;
    }
    
    return result;
}