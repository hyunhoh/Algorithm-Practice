function solution(price, money, count) {
    let total = 0;
    
    while (count) {
        total += (price * count);
        count--;
    }
    
    return total <= money ? 0 : total - money;
}