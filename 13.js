/* Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
  'Inmita',
  'Llisus',
  'Nolis',
  'Peluso',
  'Leo',
  'Meriduch',
  'Piti',
];

function finderName(usuario,vagabundo) {
  for (let i = 0; i < usuario.length; i++) {
    /* const vagabundo = usuario[i]; */
/*     console.log(vagabundo);
    console.log(usuario[i]); */
    
    if (vagabundo === usuario[i]) {
      return `${"Humano registrado"}, socio ${i+1}`
    } 

  }
  return `este ser quién es?`
}

/* finderName(nameFinder, 'Leo'); */
console.log(finderName(nameFinder, 'Piti'));
