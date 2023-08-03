function solution(number) {
    return [...number].reduce((acc, cur) => +acc + +cur) % 9
}