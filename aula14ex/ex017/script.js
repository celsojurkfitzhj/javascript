function tabuada(){
    var txtnumber = window.document.getElementById('txtnumber')
    var res = window.document.getElementById('res')

    var number = Number(txtnumber.value)
    var restab = 0

    if (number == ' '){
        window.alert('Por favor insira algum número para continuar')
    }else{
        for(var c = 1;c <= 10; c++ ){
            restab = c * number 
            
            res.innerHTML += (`${number} X ${c} = ${restab}`) 
        }
    }
}