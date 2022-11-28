function solution(my_string, n) {
    return [...my_string].map(letter => letter.repeat(n)).join('');
}