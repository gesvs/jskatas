 /* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */
let first = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < first.length; i++) {
  const element = first[i];
}
console.log(first);


/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */
let second = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < second.length; i++) {
  let resto;
  resto = i % 2;
  if (resto == 0) {
    console.log(i);
  }
}


/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */
let third = ["una oveja", "dos ovejas", "tres ovejas", "cuatro ovejas", "cinco ovejas"];
let fourth = 'Dormido!';
for (let i = 0; i < 9; i++) {

console.log(third + ' Intentando dormir 🐑');


}
for (let fifth = 9; fifth < 10; fifth++) {
  console.log(third + ' ' + fourth);
  
}


