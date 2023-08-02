function solution(myString) {
    return [...myString].map(e => e.charCodeAt(0) < 108 ? 'l' : e).join('')
}