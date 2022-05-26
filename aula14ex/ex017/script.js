function tabuada(){
    var txtnumber = window.document.getElementById('txtnumber')
    var tab = window.document.getElementById('seltab')

    if (txtnumber.value.length == 0){
        window.alert('Por favor insira algum número para continuar')
    }else{
        var number = Number(txtnumber.value)
        var restab = 0
        tab.innerHTML = ''
        for(var c = 1;c <= 10; c++ ){
            restab = c * number 
            var item = document.createElement('option')
            item.text = `${number} X ${c} = ${restab}`
            tab.appendChild(item)
        }
    }
}