function solution(num_list, n) {
    return num_list.reduce((acc, cur, idx) => {
        if(idx === n) {
            let arr = [cur];
            return [...acc, arr];
        }
        acc[acc.length-1].push(cur);
        return acc;
    }, [])
}