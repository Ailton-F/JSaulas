let amigo = {nome: 'Samuel',sexo: 'Indefinido',peso: 60, engordar(p=0){// posso colocar uma função dentro de um objeto
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)