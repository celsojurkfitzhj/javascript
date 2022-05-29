let txtnum = document.getElementById('txtnum')
let selnum = document.getElementById('selnum')
let anum = []

function adicionar() {
    let num = Number(txtnum.value)

    if (txtnum.value.length == 0) {
        window.alert('Por favor digite alguma número para continuar')
    } else if (num < 1 || num > 100) {
        window.alert('O número precisa estar entre 1 a 100')
    }else if (anum.some(number => number==num)){
        window.alert('Digite um número que nao esteja na lista')
    }else {
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adcionado`
        selnum.appendChild(item)
        anum.push(num)
    }
}