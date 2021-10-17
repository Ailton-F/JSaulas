var agora = new Date()
var hora = agora.getHours()

if (hora > 5 && hora < 12){
    console.log(`Bom dia! São ${hora}h da manhã`)
} else if (hora > 12 && hora < 18){ 
    console.log(`Boa tarde! São ${hora}h da tarde`)
} else if(hora > 17 && hora < 24){
    console.log(`Boa noite, são ${hora}h da noite`)
} else {
    console.log(`Boa madrugada! São ${hora}h da madruga`)
}