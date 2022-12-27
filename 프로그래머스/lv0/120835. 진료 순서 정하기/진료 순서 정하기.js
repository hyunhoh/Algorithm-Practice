function solution(emergency) {
    const sorted = [...emergency].sort((a,b) => b-a);
    return emergency.map((ele, idx) => sorted.indexOf(ele) + 1);
}