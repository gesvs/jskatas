const products = [
'Camiseta de Pokemon', 
'Pantalón coquinero', 
'Camiseta de pintar', 
'Inmunda camiseta', 
'Gorra de paleto', 
'Camiseta de basketbol', 
'Cinrurón de Orión', 
'Camiseta vergüenza de camiseta',
'AC/DC camiseta'
];

for (const closet of products) {
  if (closet.includes("Camiseta") || closet.includes("camiseta")) {
    console.log(closet);
  }
}