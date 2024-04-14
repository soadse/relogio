var hora = document.querySelector('#hora')
var minuto = document.querySelector('#minutos')
var segundo = document.querySelector('#segundos')
var dia = document.querySelector('#dia')
var mes = document.querySelector('#mes')
var ano = document.querySelector('#ano')
var semana = document.querySelector('#semana')
var agora = new Date();

var horas = agora.getHours();
var minutos = agora.getMinutes();
var segundos = agora.getSeconds();
hora.innerText = `${horas}`
minuto.innerText = `${minutos}`
segundo.innerText = `${segundos}`

// ATUALIZA O DIA DA SEMANA
function weeks(){
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


// ATUALIZA AS HORAS
function contarTempo(){
    segundo.innerText = `${segundos}`
    minuto.innerText = `${minutos}`
    hora.innerText = `${horas}`
    segundos++
    if(segundos == 60){
        segundos = 0
        minutos += 1
    } else if(segundos < 10){
        segundo.innerText = `0${segundos}`
    }

    if(minutos == 60){
        minutos = 0
        horas += 1
    } else if(minutos < 10){
        minuto.innerText = `0${minutos}`
    }

    if(horas == 24){
        horas = 0
    }
}
setInterval(contarTempo, 1000)


// ATUALIZA O CALENDÁRIO
function contarDia(){
    var dias = agora.getDate();
    var meses = agora.getMonth();
    var anos = agora.getFullYear(); 
    if(dias < 10){
        dias = `0${dias}`
    }
    if(meses < 10){
        meses = `0${meses+1}`
    }
    dia.innerText = `${dias}`
    mes.innerText = `${meses}`
    ano.innerText = `${anos}` 
}
setInterval(contarDia, 1000)
