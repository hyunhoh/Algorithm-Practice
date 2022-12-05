function solution(phone_number) {
    return [...phone_number].map((ele, idx) => idx < phone_number.length-4 ? '*' : ele).join('');
}