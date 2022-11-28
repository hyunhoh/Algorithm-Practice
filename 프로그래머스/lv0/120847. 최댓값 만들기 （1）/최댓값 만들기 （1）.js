function solution(numbers) {
    let first = Math.max(...numbers);
    numbers[numbers.indexOf(first)] = null;
    let second = Math.max(...numbers);
    return first * second;
}