function solution(n_str) {
    if(n_str[0] === '0') {
        return solution(n_str.slice(1))
    } else {
        return n_str
    }
    
    // return n_str[0] === '0' ? solution(n_str.slice(1)) : n_str
}