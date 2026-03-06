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