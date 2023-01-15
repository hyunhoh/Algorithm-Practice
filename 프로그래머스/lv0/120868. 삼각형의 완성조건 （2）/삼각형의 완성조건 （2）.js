function solution(sides) {
    let rest = Math.max(...sides) - Math.min(...sides) + 1;
    let result = [];
    
    while(rest < Math.max(...sides) + Math.min(...sides)) {
        result.push(rest);
        rest++;
    } 
    
    return result.length;
}