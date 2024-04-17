var corpo = window.document.body
var saudacao = window.document.querySelector('#saudacao')
const relogio = setInterval(function time() {
    var hora = document.querySelector('#hora')
    var minuto = document.querySelector('#minutos')
    var segundo = document.querySelector('#segundos')
    var agora = new Date();
    var hr = agora.getHours();
    var min = agora.getMinutes();
    var seg = agora.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(seg < 10) seg = '0' + seg;

    hora.innerText = `${hr}`
    minuto.innerText = `${min}`
    segundo.innerText = `${seg}`

    if(hr < 12){
        corpo.style.background = 'lightblue'
        saudacao.innerText = 'Bom Dia'
    } else if(hr >= 12 && min >= 0 && hr < 18){
        corpo.style.background = 'orange'
        saudacao.innerText = 'Boa Tarde'
    } else if(hr >= 18) {
        corpo.style.background = 'darkblue'
        saudacao.innerText = 'Boa Noite'
    }
})




// ATUALIZA O DIA DA SEMANA
function weeks(){
    var agora = new Date();
    var semana = document.querySelector('#semana')
    var semanas = agora.getDay();
    switch (semanas){
        case 0:
            semana.innerText = 'Domingo'
            break;
        case 1:
            semana.innerText = 'Segunda-Feira'
            break;
        case 2:
            semana.innerText = 'Terça-Feira'
            break;
        case 3:
            semana.innerText = 'Quarta-Feira'
            break;
        case 4:
            semana.innerText = 'Quinta-Feira'
            break;
        case 5:
            semana.innerText = 'Sexta-Feira'
            break;
        case 6:
            semana.innerText = 'Sábado'
            break;
    }
}
setInterval(weeks, 1000)


// ATUALIZA O CALENDÁRIO
function contarDia(){
    var dia = document.querySelector('#dia')
    var mes = document.querySelector('#mes')
    var ano = document.querySelector('#ano')
    var agora = new Date();
    var dias = agora.getDate();
    var meses = agora.getMonth()+1;
    var anos = agora.getFullYear(); 
    
    if(dias < 10) dias = '0' + dias;
    if(meses < 10) meses = '0' + meses;

    dia.innerText = `${dias}`
    mes.innerText = `${meses}`
    ano.innerText = `${anos}` 
}
setInterval(contarDia, 1000)
