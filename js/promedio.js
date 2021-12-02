function promedioCalif(){
    suma=0;
    total = 0;

    for (i=0; i<=document.calificaciones.elements.length; i++){
        ele = document.calificaciones.elements[i];

        if (ele.type=='text' && !isNaN(parseFloat(ele.value))){
            suma += 1;
            total += parseFloat(ele.value);
        }

        if (suma !=0){
            prom = total / suma;
            document.calificaciones.informe.value=prom;
        }else{
            document.calificaciones.informe.value=0;
        }

    }

}
