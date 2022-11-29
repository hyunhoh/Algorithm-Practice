function solution(array) {
    return array.join('').split('').filter(ele => ele === '7').length;
}