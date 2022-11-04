function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  let resultado =[];
  let resultadoAux = [];
  for(let i=0; i<queries.length; i++){
    //console.log(verificaTermo(texto,queries[i]));
    resultadoAux[0] = queries[i];
    resultadoAux[1] = texto.match(new RegExp(queries[i],'g')||[]).length;
    resultado.push(resultadoAux);
    resultadoAux = [];
  }
  resultado.sort(function (vetor1, vetor2){
    if(vetor1[1]>vetor2[1]){
      return -1;
    }
    else if(vetor1[1]<vetor2[1]){
      return 1;
    }
    else {
      return 0;
    }
  });
  for (let i=0; i<k;i++){
    resultadoAux.push(resultado[i][0]);
  }
 return resultadoAux;
}

function verificaTermo(string, termo){
  return string.match(new RegExp(termo,'g')||[]).length;
}