function solution(my_string, m, c) {
//     const arr = [];
    
//     for(let i=0; i<my_string.length; i+=m) {
//         arr.push(my_string.slice(i, i+m));
//     }
    
//     return arr.map(e => e[c-1]).join('')
    
    return [...my_string].filter((_, i) => i % m === c - 1).join('')
}