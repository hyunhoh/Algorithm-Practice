/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.filter((e, i) => e <= queryTime && endTime[i] >= queryTime).length
};