import { obterDesafiosPorId, exibirDesafios } from "../services/json-reader.js";
import {
  collectPositiveValue,
  collectString,
} from "../utils/prompt-manager.js";

const idAula = 1; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

function showChallenge01() {
  alert("Boas vindas ao nosso site!");
  let name = "Lua";
  let age = 25;

  const salesCount = 50;
  const currentBalance = 1000;

  const errorMesage = "Erro! Preencha todos os campos";

  alert(errorMesage);

  alert(
    `Valores padrão armazenados:\n\nNome: ${name}\nIdade: ${age}\nNúmero de Vendas: ${salesCount}\nSaldo Disponível: ${currentBalance}`,
  );

  alert("Agora insira novos valores para o (Nome) e (Idade)");

  let formattedPrompt = (valueName) =>
    `Digite s${valueName == "nome" ? "eu" : "ua"} ${valueName}:`;

  name = collectString(formattedPrompt("nome"));

  age = collectPositiveValue(formattedPrompt("idade"));

  alert(`Valores armazenados:\n\nNome: ${name}\nIdade: ${age}`);

  if (age >= 18) {
    alert("Pode tirar a habilitação!");
  }
}

document.getElementById("iniciar").addEventListener("click", function () {
  showChallenge01();
});
