function solution(array, n) {
    return array.reduce((acc, cur) => Math.abs(acc - n) < Math.abs(cur - n) ? acc :
                        Math.abs(acc - n) === Math.abs(cur - n) && acc < n ? acc : cur);
}