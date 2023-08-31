function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'fotomenino.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'fotohomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotohomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'fotomenina.jpg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'fotomulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}