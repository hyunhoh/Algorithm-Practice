function solution(s) {
    return s.split(' ').reduce((acc, cur, idx, arr) => cur === 'Z' ? acc - arr[idx-1] : acc + Number(cur), 0)
}