function solution(num_list) {
    return +num_list.filter(e => e % 2).join('') + +num_list.filter(e => !(e % 2)).join('')
}