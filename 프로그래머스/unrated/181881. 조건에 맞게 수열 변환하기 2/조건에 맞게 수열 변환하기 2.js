function solution(arr, count = 0) {
    const result = arr.map(e => e < 50 && e % 2 ? e * 2 + 1 : e >= 50 && !(e % 2) ? e / 2 : e);
    
    return result.every((e, i) => e === arr[i]) ? count : solution(result, count+1);
}