function solution(s) {
    return s.toLowerCase().split(' ').map(ele => ele ? ele[0].toUpperCase() + ele.slice(1) : '').join(' ');
}