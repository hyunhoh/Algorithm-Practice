function solution(denum1, num1, denum2, num2) {
    let top = num1*denum2 + num2*denum1;
    let bottom = num1 * num2;
    let max;
    
    for(i=1; i<=top; i++) {
        if(top % i === 0 && bottom % i === 0) {
            max = i;
        }
    }
    return [top/max, bottom/max];
}