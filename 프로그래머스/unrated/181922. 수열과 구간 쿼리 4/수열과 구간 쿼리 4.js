function solution(arr, queries) {
    return queries.reduce((acc, [s, e, k]) => {
        for(let i=s; i<=e; i++) {
            i % k ? acc[i] : acc[i] = acc[i] + 1
        }
        return acc;
    }, arr)
}