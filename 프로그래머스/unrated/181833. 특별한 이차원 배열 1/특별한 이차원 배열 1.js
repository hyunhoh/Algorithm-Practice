function solution(n) {
    const arr = [];
    
    for(let i=0; i<n; i++) {
        const sub = [];
        
        for(let j=0; j<n; j++) {
            i === j ? sub.push(1) : sub.push(0);
        }
        
        arr.push(sub)
    }
    
    return arr;
}