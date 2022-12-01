function solution(numbers, direction) {
    let first = numbers[0];
    let last = numbers[numbers.length-1];
    
    return direction === 'right' ? [last, ...numbers.slice(0, numbers.length-1)] : [...numbers.slice(1), first]
}