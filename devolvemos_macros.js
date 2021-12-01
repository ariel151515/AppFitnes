// Devolvemos macros segun alimento y porción
function macrosNutrientes(alimento, cantidad){
  
let resultado = {
    nombre:'',
    proteinas:0,
    carbohidratos:0,
    grasas:0,
    'cantidad en gramos':0,
    calorias:0,
    sodio:0
};

  
// Pasamos los valores de 100g a 1g
let misAlimentosAlimentos = [
  {
    nombre:'Pechuga de Pollo',
    proteinas:0.29,
    carbohidratos:0,
    grasas:0.07,
    'cantidad en gramos':1,
    calorias:1.95,
    sodio:0
  }
]
  
  
for(let i = 0; i < misAlimentosAlimentos.length; i++){
      if(misAlimentosAlimentos[i].nombre === alimento){
        
         resultado.nombre += misAlimentosAlimentos[i].nombre;
         resultado.['cantidad en gramos'] +=  cantidad;
         resultado.proteinas +=  misAlimentosAlimentos[i].proteinas * cantidad;
         resultado.carbohidratos +=  misAlimentosAlimentos[i].carbohidratos * cantidad;
         resultado.grasas +=  misAlimentosAlimentos[i].grasas * cantidad;
         resultado.calorias +=  misAlimentosAlimentos[i].calorias * cantidad;
         resultado.sodio +=  misAlimentosAlimentos[i].sodio * cantidad;
        
        return resultado;
        
      }
        return 'No existe'
      
}
  
}

/*-----------------------------*/

macrosNutrientes('Pechuga de Pollo', 100);
