function solution(s1, s2) {
    return s1.filter(ele => s2.includes(ele)).length;
}