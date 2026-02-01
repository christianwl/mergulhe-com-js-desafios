/**
 * Verifica se algum valor do tipo string foi inserido
 * 
 * ---
 * @param {string} valor - valor que será verificado.
 * @returns {boolean} retorna verdadeiro caso haja um valor, e falso caso não haja
 */

export function verificarSeExisteValor(valor) {
    if (valor.trim() !== "") {
        return true;
    }
    alert("Nenhum valor foi digitado!")
    return false;
}

/**
 * Verifica se o valor ou os valores fornecidos são numéricos.
 * 
 * Se um valor não numérico for encontrado, um alerta será exibido.
 * 
 * @param {(number|number[])} valor - O valor ou array de valores a serem verificados.
 * @returns {boolean} Retorna true se todos os valores forem numéricos, caso contrário, retorna false.
 */
export function verificarValorNumerico(valor) {
    if (Array.isArray(valor)) {
        for (let i = 0; i < valor.length; i++) {
            if (isNaN(valor[i])) {
                alertarAusenciaDeNumero(valor);
                return false;
            }
        }
    } else if (isNaN(valor)) {
        alertarAusenciaDeNumero(valor);
        return false;
    }

    return true;
}

function alertarAusenciaDeNumero(valor) {
    alert(`${valor} não é um valor númerico válido!`);
}

/**
 * Verifica se o valor fornecido existe e se é numérico.
 * 
 * Esta função combina a verificação de existência de valor e a verificação de valor numérico.
 * 
 * @param {*} valor - O valor a ser verificado.
 * @returns {boolean} Retorna true se o valor existir e for numérico, caso contrário, retorna false.
 */
export function verificarPromptNumerico(valor) {
    return verificarSeExisteValor(valor) && verificarValorNumerico(valor);
}

/**
 * Verifica o sinal de um número e retorna uma string descrevendo se o número é positivo, negativo ou zero.
 * 
 * @param {number} numero - O número a ser verificado.
 * @returns {string} Uma string informando se o número é positivo, negativo ou zero.
 */
export function verificarSinal(numero) {
    let resultadoSinal;
    if (Math.sign(numero) === 1) {
        resultadoSinal = "positivo";
    } else if (Math.sign(numero) === -1) {
        resultadoSinal = "negativo";
    } else {
        resultadoSinal = "apenas 0";
    }
    return `O número ${numero} é ${resultadoSinal}`;
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
        alert("Foram adicionado valores iguais em inicial e maxímo, não é possível iniciar o contador!");
        return;
    } else if (!verificarValorNumerico([inicial, max])) {
        alert("Não foram adicionados valores válidos ao Contador");
        return;
    }

    let i = inicial;
    let resultado = "";

    const menorQueMax = inicial < max;

    while (menorQueMax ? (i <= max) : (i >= max)) {
        resultado += `${i}${(max === i) ? "" : ", "}`;

        i += menorQueMax ? 1 : -1;
    }

    resultado += "."
    return resultado;
}