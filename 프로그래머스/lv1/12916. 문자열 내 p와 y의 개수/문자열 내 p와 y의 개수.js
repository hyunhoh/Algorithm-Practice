function solution(s){
    const obj = s.toLowerCase().split('').reduce((acc, cur) => {
        if(cur === 'p') {
            acc['p'] += 1;
            return acc;
        } else if(cur === 'y') {
            acc['y'] += 1;
            return acc;
        }
        return acc;
    }, {p:0,y:0})
    
    return obj.p === obj.y ? true : false;
}