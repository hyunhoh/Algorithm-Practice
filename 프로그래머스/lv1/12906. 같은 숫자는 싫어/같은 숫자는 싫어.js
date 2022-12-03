function solution(arr) {
    return arr.filter((ele, idx, arr) => ele === arr[idx+1] ? false : true);
}