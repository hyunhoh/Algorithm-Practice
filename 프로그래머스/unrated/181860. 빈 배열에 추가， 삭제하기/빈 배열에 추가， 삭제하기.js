function solution(arr, flag) {
    return arr.reduce((acc, cur, idx) => {
        if(flag[idx]) {
            for(let i=0; i<cur*2; i++) {
                acc.push(cur);
            }
            return acc;
        } else {
            return acc.slice(0, acc.length - cur)
        }
    }, [])
}