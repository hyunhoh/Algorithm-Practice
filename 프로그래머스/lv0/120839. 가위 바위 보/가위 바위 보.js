function solution(rsp) {
    return rsp.split('').map(
    ele => {
        if(ele === '2') {
            return ele = '0'
        } else if(ele === '0') {
            return ele = '5'
        } else {
            return ele = '2'
        }
    }).join('');
}