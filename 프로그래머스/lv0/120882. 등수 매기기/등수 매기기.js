function solution(score) {
    const avg = score.map(ele => (ele[0] + ele[1]) / 2);
    const sorted = [...avg].sort((a,b)=>b-a);
    
    return avg.map(ele => sorted.indexOf(ele) + 1);
}