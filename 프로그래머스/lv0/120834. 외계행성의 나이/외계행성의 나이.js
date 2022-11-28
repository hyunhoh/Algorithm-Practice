function solution(age) {
    return String(age).split('').map(ele => 'abcdefghij'[Number(ele)]).join('')
}