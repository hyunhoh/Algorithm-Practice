function solution(n) {
    return String(n).split('').reverse().map(ele => Number(ele));
}