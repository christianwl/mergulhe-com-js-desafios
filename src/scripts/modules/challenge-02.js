import {
  collectNumericValue,
  collectPositiveValue,
  collectString,
  verificarPromptNumerico,
} from "../utils/prompt-manager.js";

import { checkSign } from "../utils/math-utils.js";
import { obterDesafiosPorId, exibirDesafios } from "../services/json-reader.js";

const idAula = 2; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

const MIDWEEK_DAYS_LIST = [
  { name: "Segunda", nameNormalize: "" },
  { name: "Terça", nameNormalize: "" },
  { name: "Quarta", nameNormalize: "" },
  { name: "Quinta", nameNormalize: "" },
  { name: "Sexta", nameNormalize: "" },
];

MIDWEEK_DAYS_LIST.forEach((day) => {
  day.nameNormalize = wordNormalizer(day.name);
});

function wordNormalizer(word) {
  // utiliza o normalize com NFD para decompor a palavra e seus diacríticos (acentuações e caracteres especiais)
  // Exemplo: Sábado normalizado se torna: ["S", "´", "a", "b", "a", "d", "o"]
  // replace retornar uma nova string removendo o valor especificado no primeiro argumento pelo segundo
  // "/[\u0300-\u036f]/g": engloba todos os diacríticos entre \u0300 e \u036f, e "/g" descrevendo que é para verificar todas as ocorrências na string e não somente a primeira aparição
  // "": o valor que será colocado no lugar, exemplo: "´" vai ser trocado por "", que no caso é 'nada', assim retornando  "Sabado" ao invés de "S´abado"
  let result = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return result.toLowerCase();
}

function showChallenge02() {
  // 1
  alert(checkWeekDay());

  // 2
  const num = collectNumericValue("Digite um número positivo ou negativo: ");
  alert(checkSign(num));

  // 3
  const points = collectNumericValue(
    "Digite quantos pontos você ganho no 'O JOGO'",
  );
  if (points >= 100) {
    alert("Parabéns, você venceu!");
  } else {
    alert("Tente novamente para ganhar.");
  }

  // 4
  const balance = collectPositiveValue("Digite o valor do seu saldo atual", {
    canBeZero: true,
    optionalErrorText: "O saldo não pode ser negativo!\n\nTente novamente...",
  });
  alert(`O seu saldo atual é de R$${balance}`);

  // 5
  const userName = collectString("Digite o seu nome: ");
  alert(`Boas vindas, ${userName}`);
}

function checkWeekDay() {
  let weekDay = collectString("Qual é o dia da semana?");
  let weekDayNormalized = wordNormalizer(weekDay);

  if (weekDayNormalized == "sabado" || weekDayNormalized == "domingo") {
    return "Bom fim de semana!";
  } else if (
    !MIDWEEK_DAYS_LIST.some((day) => day.nameNormalize == weekDayNormalized)
  ) {
    return `"${weekDay}" não é um dia da semana ou foi escrito errado!\n\nRecarregue a página e tente novamente`;
  } else {
    return "Boa semana!";
  }
}

document.getElementById("iniciar").addEventListener("click", function () {
  showChallenge02();
});
