/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(e => e.slice(11, 13) > 60).length
};