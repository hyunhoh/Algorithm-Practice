function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        for(let i=cur[0]; i<=cur[1]; i++) {
            i % cur[2] ? acc[i] : acc[i] = acc[i] + 1
        }
        return acc;
    }, arr)
}