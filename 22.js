/* Usa un for para reemplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante */
let fruits = ["Strawberry", "Banana", "Orange", "Apple", "Watermelon", "Pineapple", "Raspberry"];

let foodSchedule = [
  { name: "1 Heura", isVegan: true },
  { name: "2 Salmon", isVegan: false },
  { name: "3 Tofu", isVegan: true },
  { name: "4 Burger", isVegan: false },
  { name: "5 Flamenquín", isVegan: false },
  { name: "6 Rice", isVegan: true },
  { name: "7 Pasta", isVegan: true },
  { name: "8 Lechuga al ajillo", isVegan: true },
  { name: "9 PRUEBA", isVegan: false },
  { name: "10 PRUEBA2", isVegan: true },
  { name: "11 PRUEBA3", isVegan: false },
];

let menu = [];
let hierbajos = [];
let sustitutos = [];

let discarded = 0;
let suitable = 0;

for (let pasto of foodSchedule) {
  if (pasto.isVegan == true) {
    suitable++;
    hierbajos.push(pasto.name)
  } else if (pasto.isVegan == false) {
    discarded++;
    
  }
}

fruits.splice(discarded)
let foodScheduleSize = foodSchedule.length;

/* console.log(foodScheduleSize); */

/* hierbajos.push(fruits[foodScheduleSize, 0]) */
/* console.log(hierbajos); */
/* console.log(pasto); */
/* console.log(discarded); */
/* console.log(suitable); */
/* console.log(fruits); */

menu.push.apply(hierbajos, fruits)

console.log(hierbajos);

