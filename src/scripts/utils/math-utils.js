/**
 * Verifica o sinal de um número e retorna uma string descrevendo se o número é positivo, negativo ou zero.
 *
 * @param {number} num - O número a ser verificado.
 * @returns {string} Uma string informando se o número é positivo, negativo ou zero.
 */
export function checkSign(num) {
  const numSigns = {
    0: "apenas Zero",
    "-0": "apenas Zero",
    1: "Positivo",
    "-1": "Negativo",
  };

  const sign = Math.sign(num);
  const result = numSigns[sign];

  return `O número ${num} é ${result}`;
}

/**
 * Counts from a starting number to an ending number and returns a string
 * containing the full sequence of the count.
 *
 * ---
 * Note: The `initial` and `max` values cannot be the same.
 * If they are equal, a warning message will be returned.
 *
 * @param {Object} valuesObj - Object containing the counter values.
 * @param {number} valuesObj.initial - The number where the count starts.
 * @param {number} valuesObj.max - The number where the count ends.
 *
 * @returns {string} A string containing the full count sequence or an error message.
 */

export function counter(valuesObj = {}) {
  const { initial, max } = valuesObj;
  if (initial == null || max == null) {
    return "O valor inicial ou maxímo não foi adicionado ao contador";
  }

  if (initial === max) {
    return "Foram adicionado valores iguais em inicial e maxímo, não é possível iniciar o contador!";
  }

  let numList = [];
  let index = initial;

  const step = initial < max ? 1 : -1;

  while (step === 1 ? index <= max : index >= max) {
    numList.push(index);
    index += step;
  }

  return `${numList.join(", ")}.`;
}
