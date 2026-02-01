import { verificarSeExisteValor, contador } from "../utils/functions.js";

import {
  obterDesafiosPorId,
  exibirDesafios,
} from "../services/leitorDeJson.js";

const idAula = 3; // Altere para o ID da aula que você deseja
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

document.getElementById("iniciar").addEventListener("click", function () {
  // 1 e 2

  alert(contador(1, 10));
  alert(contador(10, 0));

  // 3 e 4

  function definirContagem(sentidoDaContagem) {
    let texto = sentidoDaContagem > 0 ? "progressiva" : "regressiva";

    let contagem = prompt(`Digite um valor para a contagem ${texto}`);

    if (verificarSeExisteValor(contagem)) {
      if (sentidoDaContagem > 0) {
        alert(contador(0, Number(contagem)));
      } else {
        alert(contador(Number(contagem), 0));
      }
    }
  }

  definirContagem(-1);
  definirContagem(1);
});
