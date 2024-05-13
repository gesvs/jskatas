/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Bleu", durationInMinutes: 90 },
  { name: "In the mood for love", durationInMinutes: 99 },
  { name: "Ripley", durationInMinutes: 160 },
  { name: "La vie d'Adele", durationInMinutes: 140 },
];

const short = ["short:"];
const med = ["med:"];
const long = ["long:"];

for (let i = 0; i < movies.length; i++) {
  const film = movies[i];
  if (film.durationInMinutes < 100) {
    short.push(film);
  } else if (film.durationInMinutes > 100 && film.durationInMinutes < 200) {
    med.push(film);
  } else {
    long.push(film)
  }
  
}

console.log(short);
console.log(med);
console.log(long);