/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let ori = init

    return {
        increment: () => {
            ori += 1
            return ori
        },
        decrement: () => {
            ori -= 1
            return ori
        },
        reset: () => {
            ori = init
            return ori
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */