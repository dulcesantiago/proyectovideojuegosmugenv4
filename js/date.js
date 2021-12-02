
//Función de Reloj//
function mReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if(str_segundo.length==1)
    segundo="0"+segundo

    str_minuto = new String (minuto)
    if(str_minuto.length==1)
    minuto="0" + minuto

    str_hora = new String (hora)
    if(str_hora.length==1)
    hora="0" + hora

    horaimprimible = hora + " : " + minuto + " : " + segundo
    document.form_reloj.reloj.value=horaimprimible
    setTimeout("mReloj()",1000)
}

//Calendario//
var f= new Date();
var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

document.write('<div class="mifecha">');

document.write('<div class="anno">' + f.getFullYear() + '</div>');
document.write('<div class="dia">'+ f.getDate() +'</div>');
document.write('<div class="mes">' + meses[f.getMonth()] + '</div>');

document.write('</div>');

//Relog Analógico//

function reloj() {
	time = new Date();
	horas = time.getHours();
	minutos = time.getMinutes();
	segundos = time.getSeconds();
    
    if (horas >= 12) {
     	porcentajeHoras = horas / 12 * 360;
    }  else {
    	porcentajeHoras = horas / 24 * 360;
    }

    porcentajeHoras += minutos / 60 * 30;
    porcentajeMinutos = minutos / 60 * 360;
    porcentajeSegundos = segundos / 60 * 360;

    document.getElementById("horas").style.transform = "rotate("+ porcentajeHoras +"deg)";
    document.getElementById("minutos").style.transform = "rotate("+ porcentajeMinutos +"deg)";
    document.getElementById("segundos").style.transform = "rotate("+ porcentajeSegundos +"deg)";
}

setInterval(reloj, 1000);

//Saludo
function saludoGeneral(){

    fecha = new Date(); 
    hora = fecha.getHours(); 

    if ( hora >= 0 && hora < 12){
        texto="Buenos Días";
        imagen ="images/dias.png";
    }

    if(hora >= 12 && hora < 18){
        texto="Buenas Tardes";
        imagen ="images/tarde.png";
    }

    if(hora >= 18 && hora < 24){
        texto="Buenas Noches";
        imagen ="images/noche.png";
    }

    document.images["tiempo"].src= imagen;
    document.getElementById('txtsaludos').innerHTML= texto;

}

///////////////////////////////////////////////////////////////////