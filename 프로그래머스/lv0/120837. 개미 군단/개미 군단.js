function solution(hp) {
    if(hp % 5 === 0) {
        return hp / 5;
    } else if(hp % 5 % 3 === 0) {
        return Math.floor(hp / 5) + hp % 5 / 3;
    } else {
        return Math.floor(hp / 5) + Math.floor(hp % 5 / 3) + hp % 5 % 3;
    }
}