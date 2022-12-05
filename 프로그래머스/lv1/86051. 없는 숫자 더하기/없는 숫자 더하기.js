function solution(numbers) {
     return [1,2,3,4,5,6,7,8,9].filter(ele => !numbers.includes(ele)).reduce((acc, cur) => acc + cur);
}