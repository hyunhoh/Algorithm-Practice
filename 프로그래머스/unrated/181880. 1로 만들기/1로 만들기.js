function solution(num_list) {
    return num_list.map(e => {
        let count = 0;
        
        while(e > 1) {
            e % 2 ? e = (e - 1) / 2 : e = e / 2;
            count++;
        }
        
        return count;
    }).reduce((acc, cur) => acc + cur)
}