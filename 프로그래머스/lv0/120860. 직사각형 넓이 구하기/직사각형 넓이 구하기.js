function solution(dots) {
    const row = Math.max(...dots.map(ele => ele[0])) - Math.min(...dots.map(ele => ele[0]));
    const column = Math.max(...dots.map(ele => ele[1])) - Math.min(...dots.map(ele => ele[1]));
    return row * column;
}