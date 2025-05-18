/**
 * Calculates the factorial of a number n.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * It is denoted by n!.
 * For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
 * The factorial of 0 is defined to be 1.
 * The factorial of a negative number is undefined.
 * 
 * @param {number} n - The number to compute the factorial of.
 * @returns {number|string} - The factorial of n, or "undefined" if n is negative.
 */
function factorielle(n) {
    if (n < 0) {
        return "undefined";
    }

    if (n === 0) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}

function factorielleIterative(n)
{
    if (n < 0) {
        return "undefined";
    }
    let facto = 1;
    for (let i=1;i <=n; i++)
    {
        facto *= i;
    }
    return facto;
}

module.exports = { factorielle, factorielleIterative };
