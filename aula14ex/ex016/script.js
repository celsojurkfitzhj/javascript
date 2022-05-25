function contar(){
    var txtinicio = window.document.getElementById('txtinicio')
    var txtfim = window.document.getElementById('txtfim')
    var txtpasso = window.document.getElementById('txtpasso')
    var res  = window.document.getElementById('resultado')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    res.innerHTML = (' ')
    if (inicio == " " || fim == " " || passo == " "){
        res.innerHTML = ("Impossivel de contar")
    }else{
        if (passo == 0){
            window.alert('Atenção valor do passo invalido, logo foi mudado para 1')
            var passo = 1
        }
        res.innerHTML = ("Contando:<br>")
        for(var c = inicio; c <= fim ;c = c + passo){
            
            res.innerHTML += (c + " ")
        }
    }
}