/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let count = 0

    for(let i=0, j=s.length-1; i<j; i++, j--) {
        if(vowels.includes(s[i])) count+=1
        if(vowels.includes(s[j])) count-=1
    }

    return count === 0
};