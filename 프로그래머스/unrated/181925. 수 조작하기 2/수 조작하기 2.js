function solution(numLog) {
    return numLog.map((e, i) => numLog[i+1] - e).slice(0, -1).map(e => e === 1 ? 'w' : e === -1 ? 's' : e === 10 ? 'd' : e === -10 ? 'a' : e).join('')
}