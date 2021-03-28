function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
        if(hora >= 0 && hora < 12){
            msg.innerHTML += `<p>Bom dia!</p>`
            img.src = 'manhaa.png'
            document.body.style.background = '#e2cd9f'
        } else if(hora >= 12 && hora <= 18){
            msg.innerHTML += `<p>Boa tarde!</p>`
            img.src ='tardenovo (1).png'
            document.body.style.background = '#b9846f'
        } else {
            //Boa noite!
            msg.innerHTML += `<p>Boa noite!</p>`
            img.src = 'noitenovo (1).png'
            document.body.style.background = '#515154'
    }
}


