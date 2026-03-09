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
 * Conta de um número inicial ao número final e retorna uma string com a contagem total.
 *
 * ---
 * Nota: Os valores inicial e max não podem ser os mesmos.
 *
 * Se forem iguais, um alerta será exibido.
 * @param {number} inicial - O número que a contagem irá iniciar.
 * @param {number} max - O número máximo que a contagem deve ir.
 * @returns {string} O texto da contagem total.
 */

export function contador(inicial, max) {
  if (inicial === undefined || max === undefined) {
    alert("O valor inicial ou maxímo não foi adicionado ao contador");
    return;
  } else if (inicial === max) {
    alert(
      "Foram adicionado valores iguais em inicial e maxímo, não é possível iniciar o contador!",
    );
    return;
  } else if (!verificarValorNumerico([inicial, max])) {
    alert("Não foram adicionados valores válidos ao Contador");
    return;
  }

  let i = inicial;
  let resultado = "";

  const menorQueMax = inicial < max;

  while (menorQueMax ? i <= max : i >= max) {
    resultado += `${i}${max === i ? "" : ", "}`;

    i += menorQueMax ? 1 : -1;
  }

  resultado += ".";
  return resultado;
}
