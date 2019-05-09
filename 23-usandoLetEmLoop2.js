const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]()
funcs[6]()
funcs[8]()

/*
 * O valor de i ficou gravado na memória, devido ao fato de que
 * let tem escopo de bloco
 * (Ver conceito de closure)
 */