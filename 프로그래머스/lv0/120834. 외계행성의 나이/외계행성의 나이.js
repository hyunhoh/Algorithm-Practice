function solution(age) {
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let arr = String(age).split('').map(ele => Number(ele));
    
    return arr.map(ele => alphabets[ele]).join('')
    
    
}