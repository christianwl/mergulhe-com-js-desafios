import {
  collectNumericValue,
  collectPositiveValue,
  collectString,
} from "../utils/prompt-manager.js";

import { checkSign, counter } from "../utils/math-utils.js";

import { obterDesafiosPorId, exibirDesafios } from "../services/json-reader.js";

const idAula = 4; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

function showChallenge04() {
  // 1
  console.log("Boas vindas!");

  // 2 e 3
  const devName = "christianwl";

  console.log(`Olá, ${devName}`);
  alert(`Olá, ${devName}`);

  // 4
  let userProgramLanguage = collectString(
    "Qual a linguagem de programação que você mais gosta?",
  );

  console.log(userProgramLanguage);

  // 5
  const n1 = 1;
  const n2 = 2;

  let sum = getSumOrSub(true, [n1, n2]);
  console.log(`A soma de ${n1} e ${n2} é igual a ${sum}.`);

  // 6
  let sub = getSumOrSub(false, [n1, n2]);
  console.log(`A diferença entre ${n1} e ${n2} é igual a ${Math.abs(sub)}.`);

  // 7
  let age = collectPositiveValue("Insira a sua idade: ");
  console.log(getAgeMajorityText(age));

  // 8
  let num = collectNumericValue("Digite um valor: ");
  console.log(checkSign(num));

  // 9
  console.log(counter({initial: 1, max: 10}));

  // 10
  const grade = 8;
  console.log(getIsApprovedText(grade, 7));

  // 11
  let randomIntNum = (num) => parseInt(Math.random() * num + 1)

  console.log(randomIntNum(5));

  // 12
  console.log(randomIntNum(10));

  // 13
  console.log(randomIntNum(1000));
}

function getSumOrSub(isAdd = true, numArray = []) {
  if (numArray.length === 0) return 0;
  let typeCalc = isAdd ? +1 : -1;
  return numArray.reduce((acc, curr) => acc + curr * typeCalc);
}

function getAgeMajorityText(age, ageMajority = 18){
  let majorityText = age >= ageMajority ? "maior" : "menor";

  return `Você tem ${age} anos, e é ${majorityText} de idade!`;
}

function getIsApprovedText(grade, gradeMin = 6){
  return grade >= gradeMin ? "Aprovado" : "Reprovado";
}

document.getElementById("iniciar").addEventListener("click", () => {
  showChallenge04();
});
