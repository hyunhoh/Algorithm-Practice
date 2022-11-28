function solution(cipher, code) {
    return cipher.split('').filter((letter, index) => index % code === code-1 ? true : false).join('')
}