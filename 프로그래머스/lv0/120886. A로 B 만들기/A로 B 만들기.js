function solution(before, after) {
    let beObj = [...before].reduce((acc, cur) => {
        if(cur in acc) {
            acc[cur] += 1;
            return acc;
        } else {
            acc[cur] = 1;
            return acc;
        } 
    }, {});
    
    let afObj = [...after].reduce((acc, cur) => {
        if(cur in acc) {
            acc[cur] += 1;
            return acc;
        } else {
            acc[cur] = 1;
            return acc;
        } 
    }, {});
    
    for(key in beObj) {
        if(!(key in afObj) || beObj[key] !== afObj[key]) return 0;
    }
    
    return 1;
}