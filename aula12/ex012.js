var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)

if(hora < 12 && hora > 5){
    console.log('Bom Dia!')
}else if (hora <= 18 && hora >= 12){
    console.log('Boa tarde!')
}else if (hora >= 0 && hora <= 5){
    console.log('Boa Madrugada!')
}else{
    console.log('Boa noite!')
}