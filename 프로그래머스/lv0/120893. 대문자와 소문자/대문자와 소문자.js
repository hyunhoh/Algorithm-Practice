function solution(my_string) {
    return my_string.split('').map(letter => letter.toUpperCase() !== letter ? letter.toUpperCase() : letter.toLowerCase()).join('')
}