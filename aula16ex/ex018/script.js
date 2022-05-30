let txtnum = document.getElementById('txtnum')
let selnum = document.getElementById('selnum')
let res = document.getElementById('res')
let anum = []

function adicionar() {
    let num = Number(txtnum.value)

    if (txtnum.value.length == 0) {
        window.alert('Por favor digite alguma número para continuar')
    } else if (num < 1 || num > 100) {
        window.alert('O número precisa estar entre 1 a 100')
    } else if (anum.some(number => number == num)) {
        window.alert('Digite um número que nao esteja na lista')
    } else {
        res.innerHTML = ` `
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adcionado`
        selnum.appendChild(item)
        anum.push(num)
        anum.sort()
    }
}

function analisar() {
    if (anum.length == 0) {
        window.alert("Por favor adicione um número pra continuar")
    } else {

        let soma = 0

        for (let c = 0; c <= anum.length - 1; c++) {
            soma = soma + anum[c]
        }

        res.innerHTML = `Ao todo temos ${anum.length} números cadastrados<br>`
        res.innerHTML += `O maior valor foi ${anum[anum.length - 1]}<br>`
        res.innerHTML += `O menor valor foi ${anum[0]}<br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A media do valores é ${soma / anum.length}<br>`
    }
}
