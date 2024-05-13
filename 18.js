/* Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array */

const placesToTravel = [{id: 5, name: 'Cuba'}, {id: 11, name: 'Córdoba'}, {id: 11, name: 'PRUEBA'}, {id: 23, name: 'Manilva'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Cádiz'}, {id: 59, name: 'Zahora'}]

for (let i = 0; i < placesToTravel.length; i++) {
  /* const definitives = placesToTravel[i]; */
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
    i--;
  }

}

console.log(placesToTravel);
