import {
  contador,
  verificarPromptNumerico,
  verificarSeExisteValor,
  verificarSinal,
} from "../utils/functions.js";

import {
  obterDesafiosPorId,
  exibirDesafios,
} from "../services/leitorDeJson.js";

const idAula = 4; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

document.getElementById("iniciar").addEventListener("click", function () {
  // 1
  console.log("Boas vindas!");

  // 2 e 3
  let nomeDev = "Christian";
  console.log(`Olá, ${nomeDev}`);

  alert(`Olá, ${nomeDev}`);

  // 4
  let linguagemDeProgramacao = prompt(
    "Qual a linguagem de programação que você mais gosta?",
  );

  if (verificarSeExisteValor(linguagemDeProgramacao)) {
    console.log(linguagemDeProgramacao);
  }

  // 5
  let valor1 = 1;
  let valor2 = 2;

  let resultado;

  function somar(valores) {
    return valores.reduce((acc, curr) => acc + curr, 0);
  }

  resultado = somar([valor1, valor2]);

  console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

  // 6

  function subtrair(valores) {
    let subtracao = valores[0];
    for (let i = 1; i < valores.length; i++) {
      subtracao -= valores[i];
    }
    return subtracao;
  }

  resultado = subtrair([valor1, valor2]);

  console.log(
    `A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`,
  );

  // 7
  let idade = prompt("Insira a sua idade");
  let textoMaioridade = "";

  if (verificarPromptNumerico(idade)) {
    if (idade >= 18) {
      textoMaioridade = "maior";
    } else {
      textoMaioridade = "menor";
    }
    console.log(`Você tem ${idade} anos, e é ${textoMaioridade} de idade!`);
  }

  // 8
  let numero = prompt("Digite um valor");

  if (verificarPromptNumerico(numero)) {
    console.log(verificarSinal(numero));
  }

  // 9
  console.log(contador(1, 10));

  // 10
  let nota = 8;

  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }

  // 11
  function gerarNumeroAleatorio(numeroMaximo) {
    return parseInt(Math.random() * numeroMaximo + 1);
  }

  console.log(gerarNumeroAleatorio(5));

  // 12
  console.log(gerarNumeroAleatorio(10));

  // 13
  console.log(gerarNumeroAleatorio(1000));
});
