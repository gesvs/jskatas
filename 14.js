const counterWords = [
  'dormir',
  'dormir',
  'dormir',
  'dormir',
  'comer',
  'comer',
  'comer',
  'nadar',
  'nadar',
  'rascar',
  'retozar',
  'tomar',
  'leer'
];

function repeatCounter(array) {
  let count = {}
  
  for (let i = 0; i < array.length; i++) {
      
      if(count[array[i]] >= 1) {
        
          count[array[i]]++;
      } else {
          count[array[i]] = 1;
      }
      
  }

  console.log(count);
  
}

repeatCounter(counterWords) 