function solution(n) {
    return String(n).split('').reduce((acc , ele) => acc + Number(ele), 0)
}