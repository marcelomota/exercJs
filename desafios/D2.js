function retornaMenorEMaiorValorDeVendas(tickets) {
  let minMaxVendas=[500,20];
//Código levando em consideração o enunciado
  for(let i=0; i<tickets.length; i++){
      for(let j=0; j<tickets[i].length; j++){
        if(tickets[i][j]>19 || tickets[i][j]<501){
           if(tickets[i][j]<= minMaxVendas[0] && tickets[i][j]>19){
              minMaxVendas[0]=tickets[i][j];                    
          }
           if(tickets[i][j]>=minMaxVendas[1]&& tickets[i][j]<501){
              minMaxVendas[1]=tickets[i][j];                    
          }
        }
      }
  }

  return minMaxVendas;
}