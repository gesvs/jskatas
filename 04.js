/* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"*/
avengers.shift();
avengers.unshift("IRONMAN");

/* 1.3 console numero de elementos en el array usando la propiedad correcta de Array. */

console.log(avengers.length);

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array */

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. */
const rickAndMortyCharacter = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacter.pop();
console.log(rickAndMortyCharacter[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacter.length - 1]);



/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
rickAndMortyCharacter.splice(1, 1);
console.log(rickAndMortyCharacter);