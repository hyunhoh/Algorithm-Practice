// --------- 다른 사람의 풀이 ---------
// sort를 이용해서 유니코드순으로 정렬하고 join으로 합친 후 비교한다. 정말 간결하고 쉬운 코드다!!
// primitive data type의 값들을 비교하는 방법을 떠올렸으면 손쉽게 해결할 수 있었을 것이다.
function solution(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

// ---------- 나의 풀이 ------------
// function solution(before, after) {
//     let beObj = [...before].reduce((acc, cur) => {
//         if(cur in acc) {
//             acc[cur] += 1;
//             return acc;
//         } else {
//             acc[cur] = 1;
//             return acc;
//         } 
//     }, {});
    
//     let afObj = [...after].reduce((acc, cur) => {
//         if(cur in acc) {
//             acc[cur] += 1;
//             return acc;
//         } else {
//             acc[cur] = 1;
//             return acc;
//         } 
//     }, {});
    
//     for(key in beObj) {
//         return !(key in afObj) || beObj[key] !== afObj[key] ? 0 : continue;
//     }
    
//     return 1;
// }