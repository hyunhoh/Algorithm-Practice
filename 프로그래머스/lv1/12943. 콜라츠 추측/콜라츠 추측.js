function solution(num) {
    let count = 0;
    
    while(num > 1) {
        num % 2 ? num = num * 3 + 1 : num = num / 2;
        count++;
    }
    
    return count > 500 ? -1 : count;
}