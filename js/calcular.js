function calcular(tipo, valor){

    if(tipo==='acao'){
      
        if(valor==='C'){
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
         var valorCampo = eval( document.getElementById('resultado').value)
         document.getElementById('resultado').value = valorCampo
        }

    } else if (tipo==='Valor'){
      document.getElementById('resultado').value += valor
    }
  }