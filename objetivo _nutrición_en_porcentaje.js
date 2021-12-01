// Objetivo  nutrición en porcentaje
function nutricion(calorias,porcentajePro,porcentajeGras,porcentajeCar){
  
  let macros = {
     proteinas: 4,
     carbohidratos: 4,
     grasas: 9
  }
  
  
  let recibo = {
    calorias:calorias,
    porcentajePro:porcentajePro,
    porcentajeGras:porcentajeGras,
    porcentajeCar:porcentajeCar
  }
  
  let devuelto = {
    calorias:calorias,
    proteinas: calorias * porcentajePro / 100 / macros.proteinas,
    carbohidratos: calorias * porcentajeCar / 100 / macros.carbohidratos,
    grasas: calorias * porcentajeGras / 100 / macros.grasas
  }
  
  return devuelto;
}


/*----------------------*/
nutricion(2000,10,10,80);