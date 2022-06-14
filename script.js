function carregar () {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date(); // DATA AUTOMÁTICA
    var hora = data.getHours();  // HORÁRIO AUTOMÁTICO
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
       // Bom dia! MANHA
       img.src = 'img/fotomanha.jpg'
       document.body.style.background = '#edb796';  // COR DO FUNDO DA IMAGEM DEPENDENDO DA HORA
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde! TARDE
        img.src = 'img/fototarde.jpg'
        document.body.style.background = '#ec7d1e'; // COR DO FUNDO DA IMAGEM DEPENDENDO DA HORA
    } else {
        // Boa noite! NOITE
        img.src = 'img/fotonoite.jpg'
        document.body.style.background = '#221e13'; // COR DO FUNDO DA IMAGEM DEPENDENDO DA HORA
    }
}

// #221e13 noite 
// #ec7d1e tarde 
// #edb796 manha
