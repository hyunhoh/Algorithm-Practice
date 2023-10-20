/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let a = 0
    let b = 0

    for(let i=0, j=s.length-1; i<j; i++, j--) {
        if(vowels.includes(s[i])) a+=1
        if(vowels.includes(s[j])) b+=1
    }

    return a === b
};