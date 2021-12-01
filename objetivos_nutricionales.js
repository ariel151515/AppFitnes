// Objetivos nutricionales

function tmb(kg,fa){ 
  let tmb = kg * 22 * fa;
  return tmb;
  }

function superHabit(tmb, porcentaje){
 let porcentajeCalorias = tmb * porcentaje / 100;
 let resultado =  tmb + porcentajeCalorias;
 return resultado;
}

function deficit(tmb, porcentaje){
 let porcentajeCalorias = tmb * porcentaje / 100;
 let resultado =  tmb - porcentajeCalorias;
 return resultado;
}

/*-------------------------------------*/
tmb(65,1.3)
superHabit(1859, 25)
deficit(1859, 25)