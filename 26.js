/* Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos. */

const goodProducts = ["Productos mainstream:"];
const badProducts = ["Productos indis:"];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let i = 0; i < products.length; i++) {
  const article = products[i];
  /* console.log(article); */
  if (article.sellCount < 20) {
    badProducts.push(article);
  } else {
    goodProducts.push(article);
  }
}

console.log(goodProducts);
console.log(badProducts);