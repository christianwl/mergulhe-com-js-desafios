import {
  obterDesafiosPorId,
  exibirDesafios,
} from "../services/leitorDeJson.js";

const idAula = 1; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

document.getElementById("iniciar").addEventListener("click", function () {
  // 1
  alert("Boas vindas ao nosso site!");

  // 2
  let nome = "Lua";

  // 3
  let idade = 25;

  // 4
  let numeroDeVendas = 50;

  // 5
  let saldoDisponivel = 1000;

  // 6
  let mensagemDeErro = "Erro! Preencha todos os campos";

  alert(mensagemDeErro);

  alert(
    `Valores padrão armazenados:\n\nNome: ${nome}\nIdade: ${idade}\nNúmero de Vendas: ${numeroDeVendas}\nSaldo Disponível: ${saldoDisponivel}`,
  );

  // 7
  alert("Agora insira novos valores para o (Nome) e (Idade)");

  function retornarPrompt(tipoValor) {
    return prompt(`Digite s${tipoValor == "nome" ? "eu" : "ua"} ${tipoValor}`);
  }

  // 8
  nome = retornarPrompt("nome");

  // 9
  idade = retornarPrompt("idade");

  alert(`Valores armazenados:\n\nNome: ${nome}\nIdade: ${idade}`);

  // 10
  if (idade >= 18) {
    alert("Pode tirar a habilitação!");
  }
});
