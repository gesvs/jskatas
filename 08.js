/* Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const vengadores = ['Hulk', 'Thorcherier', 'IronMan', 'Captain A.', 'SpidermaX', 'Captain M.'];

function findLongestWord(param) {
  let longestWord = param[0];

  for (let i = 1; i < param.length; i++) {
    const element = param[i];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
    
  }

  return longestWord;
}

findLongestWord(vengadores);
console.log(findLongestWord(vengadores));