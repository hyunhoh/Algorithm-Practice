function solution(my_string) {
    const arr = my_string.match(/[0-9]+/g);
    return arr ? arr.reduce((acc, cur) => acc + Number(cur), 0) : 0;
}