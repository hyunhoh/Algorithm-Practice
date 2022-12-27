function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false;
    
    for(ele of s) {
        if(Number.isNaN(Number(ele))) return false;
    }
    
    return true;
}