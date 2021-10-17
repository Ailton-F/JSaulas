let num = [3, 4, 8, 2, 7, 9, 1]
num.sort()

/* for (let pos = 0; pos < num.length; pos++){ // Primeira maneira de Mostrar os valores na tela sem os colchetes
    console.log(`A posição ${pos} tem o valor ${num[pos]}!`)
}
*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}!`)
}