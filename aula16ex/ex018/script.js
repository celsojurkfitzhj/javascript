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
    }
    txtnum.value = ''
    txtnum.focus()
}

function analisar() {
    if (anum.length == 0) {
        window.alert("Por favor adicione um número pra continuar")
    } else {

        let soma = 0
        let menor = anum[0]
        let maior = anum[0]

        for(let pos in anum){
            if(anum[pos] > maior){
            maior = anum[pos]
            }
            if(anum[pos] < menor){
            menor = anum[pos]
            }
        }
        for (let c = 0; c <= anum.length - 1; c++) {
            soma += anum[c]
        }

        res.innerHTML = `<p>Ao todo temos ${anum.length} números cadastrados<br></p>`
        res.innerHTML += `<p>O maior valor foi ${maior}<br></p>`
        res.innerHTML += `<p>O menor valor foi ${menor}<br></p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}<br></p>`
        res.innerHTML += `<p>A media do valores é ${soma / anum.length}<br></p>`
    }
}

