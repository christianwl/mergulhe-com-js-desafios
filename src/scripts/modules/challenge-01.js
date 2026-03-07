import { obterDesafiosPorId, exibirDesafios } from "../services/json-reader.js";
import {
  collectPositiveValue,
  collectString,
} from "../utils/prompt-manager.js";

const ID_AULA = 1;
obterDesafiosPorId(ID_AULA).then((desafios) => {
  exibirDesafios(desafios, ID_AULA);
});

function showChallenge01() {
  let name = "";
  let age = 0;

  showDefaultMessages();

  name = collectUserData("nome");

  age = collectUserData("idade")

  alert(`Valores armazenados:\n\nNome: ${name}\nIdade: ${age}`);

  if (age >= 18) {
    alert("Pode tirar a habilitação!");
  }
}

function showDefaultMessages({name = "Lua", age = 25}){
  const salesCount = 50;
  const currentBalance = 1000;
  const errorMessage = "Erro! Preencha todos os campos";

  alert("Boas vindas ao nosso site!");
  
  alert(errorMessage);

  alert(
    `Valores padrão armazenados:\n\nNome: ${name}\nIdade: ${age}\nNúmero de Vendas: ${salesCount}\nSaldo Disponível: ${currentBalance}`,
  );

  alert("Agora insira novos valores para o (Nome) e (Idade)");
}

function collectUserData(valueName){
  const isName = valueName == "nome";
  const promptText = `Digite s${isName ? "eu" : "ua"} ${valueName}:`;
  if(isName){
    return collectString(promptText);
  }
  return collectPositiveValue(promptText);
}

document.getElementById("iniciar").addEventListener("click", function () {
  showChallenge01();
});
