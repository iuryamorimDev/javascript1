function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22
    msg.innerHTML = `Agora sao ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
       img.src = 'fotomanha.jpg.jpg'
       document.body.style.background = 'eb2986'
    } else if (hora >= 12 && hora < 18) {
       img.src = 'foto-tarde.jpg.jpg'
       document.body.style.background = '#b9846f'
    } else {
      img.src = 'foto-noite.jpg.jpg'
      document.body.style.background = '#515154'
    }

}

