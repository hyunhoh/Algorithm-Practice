function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        [acc[cur[1]], acc[cur[0]]] = [acc[cur[0]], acc[cur[1]]]
        return acc;
    }, arr)
}