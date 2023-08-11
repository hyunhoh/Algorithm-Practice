function solution(strArr) {
    const obj = strArr.reduce((acc, cur) => acc[cur.length] ? {...acc, [cur.length]: acc[cur.length] + 1} : {...acc, [cur.length]: 1}, {})
    
    // const obj = strArr.reduce((acc, cur) => acc[cur.length] ? {...acc, cur.length: acc[cur.length] + 1} : {...acc, cur.length: 1}, {})
    
    let max = 0;
    
    for(key in obj) {
        if(obj[key] > max) max = obj[key]
    }
    
    return max;
}