let num  = ['d', 'v', 'g', 'c', 'a']
num.push('h') // Adiciona um elemento a array
num.sort() // Organiza por ordem crescente ou alfabética
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro número do vetor é: ${num[0]}`)
let pos = num.indexOf('d')// Pega o endereço de um elemento da array 
console.log(`A letra D está na posição: ${pos}`)