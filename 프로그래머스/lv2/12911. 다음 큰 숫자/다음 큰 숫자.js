function solution(n) {
    let ans = n + 1;
    
    while(true) {
        if(ans.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length) return ans;
        ans++;
    }
}