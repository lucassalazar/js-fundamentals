const funcs = []

for (var i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]()
funcs[8]()

/*
 * Como var não tem escopo de bloco, o valor de i = 10 
 * no fim do laço, permanece o mesmo para qualquer
 * posição do vetor funcs
 */