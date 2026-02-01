// leitorDeJson.js
/**
 * Obtém os desafios de uma aula específica a partir de um arquivo JSON.
 * 
 * Esta função faz uma requisição para carregar o arquivo JSON e busca os desafios
 * correspondentes ao ID da aula fornecido. Se a aula não for encontrada, um erro será lançado.
 * 
 * @param {number} id - O ID da aula cujos desafios devem ser obtidos.
 * @returns {Promise<string[]>} Uma promessa que resolve para um array de strings contendo os desafios da aula.
 * @throws {Error} Lança um erro se a aula não for encontrada ou se ocorrer um erro ao carregar o JSON.
 */
export async function obterDesafiosPorId(id) {
    try {
      const response = await fetch('../../data/content/desafios.json');
      const data = await response.json();
      
      const aula = data.aulas.find(aula => aula.id === id);
      
      if (aula) {
        return aula.desafios;
      } else {
        throw new Error('Aula não encontrada');
      }
    } catch (error) {
      console.error('Erro ao carregar os desafios:', error);
    }
  }
  
/**
 * Exibe os desafios de uma aula no HTML.
 * 
 * Esta função recebe um array de desafios e o ID da aula, e atualiza o conteúdo
 * do elemento HTML correspondente para mostrar os desafios em uma lista.
 * 
 * @param {string[]} desafios - Um array de strings contendo os desafios a serem exibidos.
 * @param {number} idAula - O ID da aula cujos desafios estão sendo exibidos.
 */
// exibirDesafios.js
export function exibirDesafios(desafios, idAula) {
  document.getElementById('container__texto').innerHTML = `<h2>Desafio ${idAula}</h2>`;
    if (desafios) {
      let listaDesafios = `<ul>`;
      desafios.forEach(desafio => {
        listaDesafios += `<li>${desafio}</li>`;
      });
      listaDesafios += '</ul>';
  
      document.getElementById('lista-desafios').innerHTML = listaDesafios;
    }
}