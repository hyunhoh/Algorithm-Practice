/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
        let digits = [...(num + '')].sort((a,b) => +a - +b)

        let num1 = ''
        let num2 = ''

        for(let i=0; i<digits.length; i++) {
            if(i % 2) {
                num1 += digits[i]
            } else {
                num2 += digits[i]
            }
        }

        return +num1 + +num2
};