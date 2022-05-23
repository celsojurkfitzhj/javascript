function verificar(){
    var data = new Date().getFullYear()
    var ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    if(ano.value.length == 0 || ano.value > data){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = data - Number(ano.value)
        var genero = ''
        if (idade > 110){
            window.alert('[ERRO] Idade invalida')
        }else{
            if (fsex[0].checked){
                genero = 'Homem'
                
                if (idade >=0 && idade < 10){
                    img.setAttribute  ('src','imagens/bebe-m.png')
                } else if (idade < 21){
                    img.setAttribute  ('src','imagens/jovem-m.png')
                } else if (idade < 50){
                    img.setAttribute ('src','imagens/adulto-m.png')
                } else{
                    img.setAttribute ('src','imagens/idoso-m.png')
                }

            } else if (fsex[1].checked){
                genero = 'Mulher'
            
                if (idade >=0 && idade < 10){
                    img.setAttribute('src', 'imagens/bebe-f.png')           
                } else if (idade < 21){
                    img.setAttribute('src', 'imagens/jovem-f.png')            
                } else if (idade < 50) {
                    img.setAttribute('src', 'imagens/adulto-f.png')            
                } else {
                    img.setAttribute('src', 'imagens/idoso-f.png')
                }
            }

            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
        }
    }
}