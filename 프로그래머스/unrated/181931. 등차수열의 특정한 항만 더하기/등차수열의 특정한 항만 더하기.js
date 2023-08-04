function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => cur ? a + idx * d + acc : acc, 0);
}