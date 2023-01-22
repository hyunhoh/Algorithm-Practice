function solution(s) {
    return s.split(' ').map(ele => [...ele].map((ele, idx) => idx % 2 === 0 ? ele.toUpperCase() : ele.toLowerCase()).join('')).join(' ');
}