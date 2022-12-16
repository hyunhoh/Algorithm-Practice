function solution(my_str, n) {
    let result = [];
    
    for(i=0; i<my_str.length; i+=n) {
        result = [...result, my_str.slice(i, i+n)];
    }
    
    return result;
}