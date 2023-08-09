function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const temp = acc[cur[0]];
        acc[cur[0]] = acc[cur[1]];
        acc[cur[1]] = temp;
        return acc;
    }, arr)
}