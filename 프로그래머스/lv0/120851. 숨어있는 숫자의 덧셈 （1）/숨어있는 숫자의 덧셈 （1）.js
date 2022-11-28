function solution(my_string) {
    return my_string.split('').filter(
        ele => !Number.isNaN(Number(ele))).reduce(
        (acc, ele) => acc + Number(ele), 0)
}