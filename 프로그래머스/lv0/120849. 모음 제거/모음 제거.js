function solution(my_string) {
    return my_string.split('').filter(ele => ele !== 'a' && ele !== 'e' && ele !== 'i' && ele !== 'o' && ele !== 'u').join('');
}