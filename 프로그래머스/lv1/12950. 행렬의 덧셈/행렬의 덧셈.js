function solution(arr1, arr2) {
    return arr1.map((ele, idx1) => ele.map((ele, idx2) => ele + arr2[idx1][idx2]));
}