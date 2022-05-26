function contar(){
    var txtinicio = window.document.getElementById('txtinicio')
    var txtfim = window.document.getElementById('txtfim')
    var txtpasso = window.document.getElementById('txtpasso')
    var res  = window.document.getElementById('resultado')

    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)
    res.innerHTML = (' ')
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0 ){
        res.innerHTML = ("Impossivel de contar")
    }else{
        if (passo <= 0){
            window.alert('Atenção valor do passo invalido, logo foi mudado para 1')
            var passo = 1
        } 
        res.innerHTML = ('Contando: <br>')
        if (inicio > fim){
            for (var c = inicio; c >= fim ; c -= passo)

            res.innerHTML += (` ${c}  \u{1F449}`)
        }else{
            for (var c = inicio; c <=fim ; c += passo)
            res.innerHTML += (` ${c}  \u{1F449}`)
        }
        res.innerHTML += `\u{1F3C1}`
    }
}