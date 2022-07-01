function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bomd = document.getElementById('saudar')
    
    var data = new Date()    
    var hora = data.getHours()
    var minutos = String(data.getMinutes()).padStart(2, "0");
    msg.innerHTML =`Agora são ${hora}:${minutos}`
    setInterval('carregar()',1000)

    if(hora >= 0 && hora < 12){
        
        bomd.innerHTML = 'Bom dia!'
        img.src = './manha.png'
        document.body.style.background = 'linear-gradient(0deg, rgba(253,243,58,1) 0%, rgba(254,169,52,1) 35%, rgba(213,134,67,1) 100%)'
        document.getElementById('saudar').style.color = 'rgba(213,134,67,1)'
        
    }
    else if(hora >= 12 && hora <= 18){
        bomd.innerHTML = 'Boa Tarde!'
        img.src = './tarde.png'  
        document.body.style.background ='linear-gradient(0deg, rgba(252,196,159,1) 0%, rgba(175,113,102,1) 35%, rgba(107,64,74,1) 100%)'
        document.getElementById('saudar').style.color = 'rgba(107,64,74,1)'
    }
    else{
        bomd.innerHTML = 'Boa Noite!'
        img.src = './noite.png'   
        document.body.style.background = 'linear-gradient(0deg, rgba(3,101,128,1) 0%, rgba(0,65,89,1) 35%, rgba(34,38,46,1) 100%)'  
        document.getElementById('saudar').style.color = 'rgba(34,38,46,1)'     
    }
}