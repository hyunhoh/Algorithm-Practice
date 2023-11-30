/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let sec = 0
    let cur = 97

    for(char of word) {
        const code = char.charCodeAt()
        const diff = Math.abs(code - cur)

        sec += (diff <= 13 ? diff : 26 - diff) + 1
        cur = code
    }

    return sec
};