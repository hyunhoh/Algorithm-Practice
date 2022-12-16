function solution(s) {
    let arr = [...s]
    return arr.sort().filter((ele, idx, arr) => ele !== arr[idx+1] && ele !== arr[idx-1]).join('');
}