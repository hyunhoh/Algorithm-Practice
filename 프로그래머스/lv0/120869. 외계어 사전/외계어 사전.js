function solution(spell, dic) {
    return dic.map(ele => [...ele].sort().join('')).includes(spell.sort().join('')) ? 1 : 2;
}