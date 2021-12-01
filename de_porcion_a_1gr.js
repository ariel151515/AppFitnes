// De porción a 1gr
function deporcionAunGramo(nombre,proteinas,carbohidratos,grasas,cantidadDeLaPorcion,calorias){
  
  let recibo = {
    nombre:nombre,
    proteinas:proteinas,
    carbohidratos:carbohidratos,
    grasas:grasas,
    'cantidad en gramos':cantidadDeLaPorcion,
    calorias:calorias,
};
  
  
let resultado = {
    nombre:recibo.nombre,
    proteinas:recibo.proteinas / cantidadDeLaPorcion,
    carbohidratos:recibo.carbohidratos / cantidadDeLaPorcion,
    grasas:recibo.grasas / cantidadDeLaPorcion,
    'cantidad en gramos':recibo.['cantidad en gramos'] / cantidadDeLaPorcion,
    calorias:recibo.calorias / cantidadDeLaPorcion,
};
  
  return resultado;
}

/*-----------------------------*/
deporcionAunGramo('Pecguga de pollo',29.55,0,7,100,195)
