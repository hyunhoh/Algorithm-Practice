/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    // const arr = [...String(num)];

    // for(let i=0; i<arr.length; i++) {
    //     if(arr[i] === '6') {
    //         arr[i] = '9';
    //         return Number(arr.join(''))
    //     }
    // }

    // return num;

    return +String(num).replace('6', '9')
};