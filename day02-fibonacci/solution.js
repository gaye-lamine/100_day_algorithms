/**
 *
 * @param {*} n
 * @returns {number[]}
 */
function fibonacciSeriesIterative(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return 'n doit être un entier positif';
    }
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  let fib = [0, 1];
 

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

/**
 * @param {*} n
 * @returns {number[]}
 */
function fibonacciSeriesRecursive(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return 'n doit être un entier positif';
    }
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
    if (n < 0) {
        return "undefined";
    }

  const series = fibonacciSeriesRecursive(n - 1);
  const next = series[series.length - 1] + series[series.length - 2];
  series.push(next);
  return series;
}

/**
 * Génère la série de Fibonacci jusqu'à l'indice n (inclus)
 * en utilisant la programmation dynamique.
 *
 * @param {number} n
 * @returns {number[]}
 */
function fibonacciSeriesDynamic(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return 'n doit être un entier positif';
  }

  const fib = new Array(n + 1);
  fib[0] = 0;
  if (n >= 1) fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}




module.exports = { fibonacciSeriesIterative, fibonacciSeriesRecursive, fibonacciSeriesDynamic };
