function solution(arr) {
    // for(let i=0; i<arr.length; i++) {
    //     for(let j=0; j<arr[i].length; j++) {
    //         if(arr[i][j] !== arr[j][i]) return 0;
    //     }
    // }
    // return 1;
    
    return arr.every((e, i) => e.every((e, j) => e === arr[j][i])) ? 1 : 0
}