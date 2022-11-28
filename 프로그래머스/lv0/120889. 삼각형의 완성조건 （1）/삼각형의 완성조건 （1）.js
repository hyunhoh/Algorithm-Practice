function solution(sides) {
    const sorted = sides.sort((a, b) => { return a - b});
    return sorted[2] < sorted[0] + sorted[1] ? 1 : 2;
}