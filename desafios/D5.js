function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
  let horasAssistidas = [];
  let totalHoras = 0;
  let assinantePorcentagem = [];
  for(let i=0; i<minutosAssistidos.length; i++){
    let hrs = minutosAssistidos[i]/60;
    hrs = Math.ceil(hrs);
    if(assinante[i]){
          totalHoras += hrs*2;
    }
    else{
      totalHoras += hrs;
    }
    
    horasAssistidas.push(hrs);
  }
  for(let i=0; i<assinante.length; i++){
    if(assinante[i]){
      horasAssistidas[i] = horasAssistidas[i]*2;
    }
    let porcentagem = Math.round((horasAssistidas[i]*100)/totalHoras);
    assinantePorcentagem.push(porcentagem);
  }
 return assinantePorcentagem;
}