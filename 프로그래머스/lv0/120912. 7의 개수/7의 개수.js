function solution(array) {
    return array.map(ele => String(ele)).join('').split('').filter(ele => ele === '7').length;
}