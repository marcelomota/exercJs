function calculaTotalLeds(altura,largura) {
  let inicial=2;
  
if(altura!=0 && largura!=0){
    for(let i=1; i<=altura; i++){
    inicial +=2;
    console.log(inicial);
  }
  
  for(let j=1; j<largura;j++){
    inicial +=altura+1;
  }
}
  else {
    inicial=0;
  }
  return inicial;
}