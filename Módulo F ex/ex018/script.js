let num = document.getElementById('n1')
let sele = document.getElementById('sele')
let p = document.getElementById('res')
let nums = []

function isNumber(n){ //testa se se encaixa na condição 1 - 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}

function inLista(n, l){ //testa se está na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    

    if (isNumber(num.value) && !inLista(num.value, nums)){

        nums.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Número ${num.value} foi adicionado`
        sele.appendChild(item)
        p.innerHTML = ''

    } else {
        alert('Número inválido ou já encontrado na lista')
    }
    num.value = '' // Reseta o valor do input
    num.focus() // Foca novamente no input
}

function finalizar(){
    if (nums.length == 0){
        alert('Preencha o campo acima para continuar')
    } else {
        let tot = nums.length
        let maior = nums[0]
        let menor = nums[0]
        let soma = 0
        let media = 0

        for (let pos in nums){
            soma += nums[pos]

            media = soma / tot 

            if (nums[pos] > maior){
            maior = nums[pos]
            }

            if (nums[pos] < menor){
                menor = nums[pos]
            }
        } 

        p.innerHTML = ''
        p.innerHTML += `Ao todo temos ${tot} números cadastrados <br><br>`
        p.innerHTML += `O maior valor informado foi: ${maior} <br><br>`
        p.innerHTML += `O menor valor informado foi: ${menor} <br><br>`
        p.innerHTML += `Somando todos os valores, o resultado é: ${soma} <br><br>`
        p.innerHTML += `E a media dos valores é igual a: ${media}`
    }
}