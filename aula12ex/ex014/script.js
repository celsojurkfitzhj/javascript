function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var time = new Date().getHours()

    msg.innerHTML = `Agora são ${time} horas.`
    
    if (time >= 0 && time < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#edf1a4'
    } else if (time >=12 && time < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#81360e'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#6f4962'
    }

}