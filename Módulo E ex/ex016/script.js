function contando(){
    let ini = document.getElementById('inicio') 
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerText = 'Impossivel contar!'
        //alert('[ERRO] Preencha todas as caixar para continuar')
    } else {

        let Nini = Number(ini.value)
        let Nfim = Number(fim.value)
        let Npasso = Number(passo.value)
        res.innerHTML = `Contando: `

        if (Npasso <= 0){
            alert('Passo inválido, mudando para "1"')
            Npasso = 1
        }
        if (Nini < Nfim){
            //Contagem crescente
            for (let c = Nini; c <= Nfim; c += Npasso){
                res.innerHTML += `${c} \u{25B6} `
            }
        } else {
            //Contagem decrescente
            for (let c = Nini; c >= Nfim; c -= Npasso){
                res.innerText += `${c} \u{25B6}`
            }
        }
        res.innerHTML += `\u{1F4CD}`
    } 
}