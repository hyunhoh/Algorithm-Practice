function solution(s) {
    const arr = s.split(' ').map(ele => Number(ele));
    return Math.min(...arr) + ' ' + Math.max(...arr);
}