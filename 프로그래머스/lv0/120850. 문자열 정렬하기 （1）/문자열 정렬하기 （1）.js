function solution(my_string) {
    return my_string.split('').filter(letter => isNaN(Number(letter)) ? false : true).map(num => Number(num)).sort()
}