/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  const stack = [];
  let result = ''

  for(char of s) {
    if(char === '(') {
      stack.push('(')
      if(stack.length !== 1) {
        result += '('
      }
    } else {
      stack.pop()
      if(stack.length > 0) {
        result += ')'
      }
    }
  }

  return result;
};