function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, cur) => cur.slice(s, s+l) > k ? [...acc, +cur.slice(s, s+l)] : acc ,[])
}