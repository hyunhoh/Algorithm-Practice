function solution(myString) {
    return [...myString].map(e => e === 'a' || e === 'A' ? 'A' : e.toLowerCase()).join('');
}