function tabuada(){
    let num = document.getElementById('n1')
    let res = document.getElementById('res')
    
    if (num.value.length == 0){
        alert('Digite um número para continuar')
    } else {
        let numV = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${numV} x ${c} = ${numV*c}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
    }
}