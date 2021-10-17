function check(){
    var res = document.getElementById('res')
    var anoN = document.getElementById('ano')
    var data = new Date()
    var anoA = data.getFullYear()
    var sex = document.getElementsByName('sex')
    var idade = anoA - Number(anoN.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoN.value.length == 0 || anoN.value > anoA){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-h.png')
            } else {
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (sex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 24) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
               img.setAttribute('src','idosa')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}