function solution(A,B){
    let a = A.sort((a,b) => a-b);
    let b = B.sort((a,b) => b-a);
    
    return a.reduce((acc, cur, idx) => acc + cur * b[idx],0)
}