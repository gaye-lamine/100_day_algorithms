/**
 * @param {number} n 
 * @returns {number|string}
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

/**
 * @param {number} n
 * @returns {number|string}
 * /
 */

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
