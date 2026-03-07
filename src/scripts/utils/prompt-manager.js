export function checkIsNull(value) {
  return value === null;
}

function decidePromptExit() {
  return confirm("Você deseja sair do Prompt?");
}

export function returnPromptValue(promptText, checkFunction) {
  let value;

  do {
    value = prompt(promptText);

    if (checkIsNull(value)) {
      if (decidePromptExit()) {
        return null;
      }
    }
  } while (value === null || !checkFunction(value));
  return value;
}

/**
 * Checks if a string value was inserted.
 * * ---
 * @param {string} value - The value to be checked.
 * @returns {boolean} Returns true if there is a value, and false if not.
 */

export function checkIfValueExists(value) {
  if (value.trim() !== "") {
    return true;
  }
  alert("Nenhum valor foi digitado!");
  return false;
}

export function collectString(promptText) {
  let text;

  text = returnPromptValue(promptText, (value) => checkIfValueExists(value));

  if (checkIsNull(text)) return null;

  return text;
}

/**
 * Checks if the provided value or values are numeric.
 * * If a non-numeric value is found, an alert will be displayed.
 * * @param {(number|number[])} value - The value or array of values to be checked.
 * @returns {boolean} Returns true if all values are numeric, otherwise false.
 */
export function checkNumericValue(value) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (isNaN(value[i])) {
        alertMissingNumber(value[i]);
        return false;
      }
    }
  } else if (isNaN(value)) {
    alertMissingNumber(value);
    return false;
  }

  return true;
}

function alertMissingNumber(value) {
  alert(`${value} não é um valor númerico!`);
}

/**
 * Checks if the provided value exists and is numeric.
 * * This function combines existence check and numeric check.
 * * @param {*} value - The value to be checked.
 * @returns {boolean} Returns true if the value exists and is numeric, otherwise false.
 */
export function checkNumericPrompt(value) {
  return checkIfValueExists(value) && checkNumericValue(value);
}

export function collectNumericValue(promptText) {
  let num;

  num = returnPromptValue(promptText, (value) => checkNumericPrompt(value));

  if (checkIsNull(num)) return null;

  num = Number(num);

  return num;
}

export function collectSpecificNumber(promptText, numArray = []) {
  let num;
  let validNum;
  do {
    num = collectNumericValue(promptText);
    if (checkIsNull(num)) return null;

    validNum = numArray.includes(num);
    if (!validNum) alert("Número inválido! Tente novamente...");
  } while (!validNum);

  return num;
}

/**
 * Collects a positive value from the user.
 * * @param {string} promptText - The text to be displayed in the prompt.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.canBeZero=false] - Whether zero is an acceptable value.
 * @param {string} [options.optionalErrorText=""] - Custom error message.
 * @returns {number|null} Returns the positive number or null if the user cancels.
 */
export function collectPositiveValue(
  promptText,
  { canBeZero = false, optionalErrorText = "" } = {},
) {
  let num;
  let positive;

  do {
    num = collectNumericValue(promptText);
    if (checkIsNull(num)) return null;

    positive = canBeZero ? num >= 0 : num > 0;

    if (!positive)
      alert(
        optionalErrorText ||
          "Você digitou um número que não é positivo, tente novamente",
      );
  } while (!positive);

  return num;
}
