function load(){ 
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var corpo = document.body
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `São exatamente ${hora} horas.`  
    
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        corpo.style.background = '#e23b3d'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        corpo.style.background = '#d5a638'
    }else {
        //boa noite
        img.src = 'noite.png'
        corpo.style.background = '#112a35'
    }
} 
//