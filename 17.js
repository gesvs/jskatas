/* Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena. */

const alien = {
  name: 'Satán',
  race: 'Demonium',
  planet: 'Inferno',
  weight: '1000000000Tn'
}
for (const key in alien) {
  if (Object.hasOwnProperty.call(alien, key)) {
    const element = alien[key];
    console.log(element);
    
  }
}

