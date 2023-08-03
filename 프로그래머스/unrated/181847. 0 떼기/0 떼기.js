function solution(n_str) {
    return n_str[0] === '0' ? solution(n_str.slice(1)) : n_str
}