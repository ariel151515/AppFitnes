// Balance nutricional 
function balanceNutricional(calorias,carbohidratos,grasas,proteinas){
  
let objetivo = {
  calorias:1000,
  carbohidratos:200,
  grasas:11,
  proteinas:25
}

let total = {
  calorias:calorias,
  carbohidratos:carbohidratos,
  grasas:grasas,
  proteinas:proteinas
}

let resto = {
  calorias:objetivo.calorias - total.calorias,
  carbohidratos:objetivo.carbohidratos - total.carbohidratos,
  grasas:objetivo.grasas - total.grasas,
  proteinas:objetivo.proteinas - total.proteinas
}

return resto;
}


/*----------------------*/
balanceNutricional(800,160,9,20);
