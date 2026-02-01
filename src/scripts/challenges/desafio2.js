import { verificarPromptNumerico, verificarSinal } from "../utils/functions.js";

import {
  obterDesafiosPorId,
  exibirDesafios,
} from "../services/leitorDeJson.js";

const idAula = 2; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

document.getElementById("iniciar").addEventListener("click", function () {
  // 1
  let diaDaSemana = prompt("Qual é o dia da semana?");
  let listaDiasDoMeioDaSemana = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
  ];

  function normalizarPalavra(palavra) {
    // utiliza o normalize com NFD para decompor a palavra e seus diacríticos (acentuações e caracteres especiais)
    // Exemplo: Sábado normalizado se torna: ["S", "´", "a", "b", "a", "d", "o"]
    // replace retornar uma nova string removendo o valor especificado no primeiro argumento pelo segundo
    // "/[\u0300-\u036f]/g": engloba todos os diacríticos entre \u0300 e \u036f, e "/g" descrevendo que é para verificar todas as ocorrências na string e não somente a primeira aparição
    // "": o valor que será colocado no lugar, exemplo: "´" vai ser trocado por "", que no caso é 'nada', assim retornando  "Sabado" ao invés de "S´abado"
    var palavraNormalizada = palavra
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    return palavraNormalizada.toLowerCase();
  }

  let semanaEmMinusculo = normalizarPalavra(diaDaSemana);

  if (semanaEmMinusculo == "sabado" || semanaEmMinusculo == "domingo") {
    alert("Bom fim de semana!");
  } else if (diaDaSemana.trim() == "") {
    alert("Nada foi digitado!");
  } else if (!listaDiasDoMeioDaSemana.includes(semanaEmMinusculo)) {
    alert(
      `"${diaDaSemana}" não é um dia da semana ou foi escrito errado!\n\nRecarregue a página e tente novamente`,
    );
  } else {
    alert("Boa semana!");
  }

  // 2
  let numero = prompt("Digite um número positivo ou negativo");

  if (verificarPromptNumerico(numero)) {
    alert(verificarSinal(numero));
  }

  // 3
  let pontos = prompt("Digite quantos ponto você ganhou no 'O JOGO'");

  if (verificarPromptNumerico(pontos)) {
    if (pontos >= 100) {
      alert("Parabéns, você venceu!");
    } else {
      alert("Tente novamente para ganhar.");
    }
  }

  // 4
  let saldoConta = prompt("Digite o valor do seu saldo atual");

  if (verificarPromptNumerico(saldoConta)) {
    alert(`O seu saldo atual é de R$${saldoConta}`);
  }

  // 5
  let nomeUsuario = prompt("Digite o seu nome:");

  if (nomeUsuario.trim() !== "") {
    alert(`Boas vindas, ${nomeUsuario}`);
  } else {
    alert("Nada foi digitado...");
  }
});
