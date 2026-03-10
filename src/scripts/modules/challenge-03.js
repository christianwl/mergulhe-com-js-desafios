// import { verificarSeExisteValor } from "../utils/prompt-manager.js";
import { counter } from "../utils/math-utils.js";

import { obterDesafiosPorId, exibirDesafios } from "../services/json-reader.js";
import {
  collectNumericValue,
  collectSpecificNumber,
} from "../utils/prompt-manager.js";

function showChallenge03() {
  // 1 e 2
  alert(counter({ initial: 1, max: 10 }));
  alert(counter({ initial: 10, max: 0 }));

  // 3 e 4
  alert(getUserCounter({ isProgressive: true }));
  alert(getUserCounter({ isProgressive: false }));
}

function getUserCounter({ isProgresive: isProgressive = false } = {}) {
  const typeCounterList = {
    1: "Progressiva",
    2: "Regresiva",
  };

  let userChoice;

  if (isProgressive === undefined) {
    userChoice = collectSpecificNumber(
      `Digite qual contagem você deseja fazer:\n\n[ 1 ] ${typeCounterList[1]}\n\n[ 2 ] ${typeCounterList[2]}`,
      [1, 2],
    );
  } else {
    userChoice = isProgressive ? 1 : 2;
  }

  const userNum = collectNumericValue(
    `Digite o valor para a contagem ${typeCounterList[userChoice]}`,
  );

  let obj = { initial: 0, max: 0 };
  userChoice === 1 ? (obj.max = userNum) : (obj.initial = userNum);

  return counter(obj);
}

const idAula = 3;
obterDesafiosPorId(idAula).then((desafios) => {
  exibirDesafios(desafios, idAula);
});

document.getElementById("iniciar").addEventListener("click", function () {
  showChallenge03();
});
