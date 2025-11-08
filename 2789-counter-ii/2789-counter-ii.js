/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init

    return {
        increment: () => {
            return currentValue += 1
        },
        decrement: () => {
            return currentValue -= 1
        },
        reset: () => {
            return currentValue = init
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */