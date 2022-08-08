

$('#linha1 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha1 = document.getElementById("horaInicioSegundalinha1").value.split(':').map(Number);
    var horaFimSegundalinha1 = document.getElementById("horaFimSegundalinha1").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha1 = document.getElementById("horaInicioTercalinha1").value.split(':').map(Number);
    var horaFimTercalinha1 = document.getElementById("horaFimTercalinha1").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha1 = document.getElementById("horaInicioQuartalinha1").value.split(':').map(Number);
    var horaFimQuartalinha1 = document.getElementById("horaFimQuartalinha1").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha1 = document.getElementById("horaInicioQuintalinha1").value.split(':').map(Number);
    var horaFimQuintalinha1 = document.getElementById("horaFimQuintalinha1").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha1 = document.getElementById("horaInicioSextalinha1").value.split(':').map(Number);
    var horaFimSextalinha1 = document.getElementById("horaFimSextalinha1").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha1 = document.getElementById("horaInicioSabadolinha1").value.split(':').map(Number);
    var horaFimSabadolinha1 = document.getElementById("horaFimSabadolinha1").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha1 = document.getElementById("horaInicioDomingolinha1").value.split(':').map(Number);
    var horaFimDomingolinha1 = document.getElementById("horaFimDomingolinha1").value.split(':').map(Number);


    var diferecaHoraTotallinha1 = ((horaFimSegundalinha1[0]*60 + horaFimSegundalinha1[1])+(horaFimTercalinha1[0]*60 + horaFimTercalinha1[1])+(horaFimQuartalinha1[0]*60 + horaFimQuartalinha1[1])+(horaFimQuintalinha1[0]*60 + horaFimQuintalinha1[1])+(horaFimSextalinha1[0]*60 + horaFimSextalinha1[1])+(horaFimSabadolinha1[0]*60 + horaFimSabadolinha1[1])+(horaFimDomingolinha1[0]*60 + horaFimDomingolinha1[1]))-((horaInicioSegundalinha1[0]*60 + horaInicioSegundalinha1[1])+(horaInicioTercalinha1[0]*60 + horaInicioTercalinha1[1])+(horaInicioQuartalinha1[0]*60 + horaInicioQuartalinha1[1])+(horaInicioQuintalinha1[0]*60 + horaInicioQuintalinha1[1])+(horaInicioSextalinha1[0]*60 + horaInicioSextalinha1[1])+(horaInicioSabadolinha1[0]*60 + horaInicioSabadolinha1[1])+(horaInicioDomingolinha1[0]*60 + horaInicioDomingolinha1[1]))
    if (diferecaHoraTotallinha1 <= 0){
        diferecaHoraTotallinha1 = 0
    }


    var MMHoraTotallinha1 = diferecaHoraTotallinha1%60;MMHoraTotallinha1.toString().length==1?MMHoraTotallinha1="0"+MMHoraTotallinha1:0;
    if(isNaN(diferecaHoraTotallinha1)) return;
    

    resultadoHoraTotallinha1 = Math.floor((diferecaHoraTotallinha1)/60) + "Hora(s) e " + MMHoraTotallinha1 + "minuto(s)";
    

    document.getElementById("horaTotallinha1").value = resultadoHoraTotallinha1;
});

$('#linha2 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha2 = document.getElementById("horaInicioSegundalinha2").value.split(':').map(Number);
    var horaFimSegundalinha2 = document.getElementById("horaFimSegundalinha2").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha2 = document.getElementById("horaInicioTercalinha2").value.split(':').map(Number);
    var horaFimTercalinha2 = document.getElementById("horaFimTercalinha2").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha2 = document.getElementById("horaInicioQuartalinha2").value.split(':').map(Number);
    var horaFimQuartalinha2 = document.getElementById("horaFimQuartalinha2").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha2 = document.getElementById("horaInicioQuintalinha2").value.split(':').map(Number);
    var horaFimQuintalinha2 = document.getElementById("horaFimQuintalinha2").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha2 = document.getElementById("horaInicioSextalinha2").value.split(':').map(Number);
    var horaFimSextalinha2 = document.getElementById("horaFimSextalinha2").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha2 = document.getElementById("horaInicioSabadolinha2").value.split(':').map(Number);
    var horaFimSabadolinha2 = document.getElementById("horaFimSabadolinha2").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha2 = document.getElementById("horaInicioDomingolinha2").value.split(':').map(Number);
    var horaFimDomingolinha2 = document.getElementById("horaFimDomingolinha2").value.split(':').map(Number);


    var diferecaHoraTotallinha2 = ((horaFimSegundalinha2[0]*60 + horaFimSegundalinha2[1])+(horaFimTercalinha2[0]*60 + horaFimTercalinha2[1])+(horaFimQuartalinha2[0]*60 + horaFimQuartalinha2[1])+(horaFimQuintalinha2[0]*60 + horaFimQuintalinha2[1])+(horaFimSextalinha2[0]*60 + horaFimSextalinha2[1])+(horaFimSabadolinha2[0]*60 + horaFimSabadolinha2[1])+(horaFimDomingolinha2[0]*60 + horaFimDomingolinha2[1]))-((horaInicioSegundalinha2[0]*60 + horaInicioSegundalinha2[1])+(horaInicioTercalinha2[0]*60 + horaInicioTercalinha2[1])+(horaInicioQuartalinha2[0]*60 + horaInicioQuartalinha2[1])+(horaInicioQuintalinha2[0]*60 + horaInicioQuintalinha2[1])+(horaInicioSextalinha2[0]*60 + horaInicioSextalinha2[1])+(horaInicioSabadolinha2[0]*60 + horaInicioSabadolinha2[1])+(horaInicioDomingolinha2[0]*60 + horaInicioDomingolinha2[1]))
    if (diferecaHoraTotallinha2 <= 0){
        diferecaHoraTotallinha2 = 0
    }


    var MMHoraTotallinha2 = diferecaHoraTotallinha2%60;MMHoraTotallinha2.toString().length==1?MMHoraTotallinha2="0"+MMHoraTotallinha2:0;
    if(isNaN(diferecaHoraTotallinha2)) return;
    

    resultadoHoraTotallinha2 = Math.floor((diferecaHoraTotallinha2)/60) + "Hora(s) e " + MMHoraTotallinha2 + "minuto(s)";
    

    document.getElementById("horaTotallinha2").value = resultadoHoraTotallinha2;
});

$('#linha3 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha3 = document.getElementById("horaInicioSegundalinha3").value.split(':').map(Number);
    var horaFimSegundalinha3 = document.getElementById("horaFimSegundalinha3").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha3 = document.getElementById("horaInicioTercalinha3").value.split(':').map(Number);
    var horaFimTercalinha3 = document.getElementById("horaFimTercalinha3").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha3 = document.getElementById("horaInicioQuartalinha3").value.split(':').map(Number);
    var horaFimQuartalinha3 = document.getElementById("horaFimQuartalinha3").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha3 = document.getElementById("horaInicioQuintalinha3").value.split(':').map(Number);
    var horaFimQuintalinha3 = document.getElementById("horaFimQuintalinha3").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha3 = document.getElementById("horaInicioSextalinha3").value.split(':').map(Number);
    var horaFimSextalinha3 = document.getElementById("horaFimSextalinha3").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha3 = document.getElementById("horaInicioSabadolinha3").value.split(':').map(Number);
    var horaFimSabadolinha3 = document.getElementById("horaFimSabadolinha3").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha3 = document.getElementById("horaInicioDomingolinha3").value.split(':').map(Number);
    var horaFimDomingolinha3 = document.getElementById("horaFimDomingolinha3").value.split(':').map(Number);


    var diferecaHoraTotallinha3 = ((horaFimSegundalinha3[0]*60 + horaFimSegundalinha3[1])+(horaFimTercalinha3[0]*60 + horaFimTercalinha3[1])+(horaFimQuartalinha3[0]*60 + horaFimQuartalinha3[1])+(horaFimQuintalinha3[0]*60 + horaFimQuintalinha3[1])+(horaFimSextalinha3[0]*60 + horaFimSextalinha3[1])+(horaFimSabadolinha3[0]*60 + horaFimSabadolinha3[1])+(horaFimDomingolinha3[0]*60 + horaFimDomingolinha3[1]))-((horaInicioSegundalinha3[0]*60 + horaInicioSegundalinha3[1])+(horaInicioTercalinha3[0]*60 + horaInicioTercalinha3[1])+(horaInicioQuartalinha3[0]*60 + horaInicioQuartalinha3[1])+(horaInicioQuintalinha3[0]*60 + horaInicioQuintalinha3[1])+(horaInicioSextalinha3[0]*60 + horaInicioSextalinha3[1])+(horaInicioSabadolinha3[0]*60 + horaInicioSabadolinha3[1])+(horaInicioDomingolinha3[0]*60 + horaInicioDomingolinha3[1]))
    if (diferecaHoraTotallinha3 <= 0){
        diferecaHoraTotallinha3 = 0
    }


    var MMHoraTotallinha3 = diferecaHoraTotallinha3%60;MMHoraTotallinha3.toString().length==1?MMHoraTotallinha3="0"+MMHoraTotallinha3:0;
    if(isNaN(diferecaHoraTotallinha3)) return;
    

    resultadoHoraTotallinha3 = Math.floor((diferecaHoraTotallinha3)/60) + "Hora(s) e " + MMHoraTotallinha3 + "minuto(s)";
    

    document.getElementById("horaTotallinha3").value = resultadoHoraTotallinha3;
});

$('#linha4 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha4 = document.getElementById("horaInicioSegundalinha4").value.split(':').map(Number);
    var horaFimSegundalinha4 = document.getElementById("horaFimSegundalinha4").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha4 = document.getElementById("horaInicioTercalinha4").value.split(':').map(Number);
    var horaFimTercalinha4 = document.getElementById("horaFimTercalinha4").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha4 = document.getElementById("horaInicioQuartalinha4").value.split(':').map(Number);
    var horaFimQuartalinha4 = document.getElementById("horaFimQuartalinha4").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha4 = document.getElementById("horaInicioQuintalinha4").value.split(':').map(Number);
    var horaFimQuintalinha4 = document.getElementById("horaFimQuintalinha4").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha4 = document.getElementById("horaInicioSextalinha4").value.split(':').map(Number);
    var horaFimSextalinha4 = document.getElementById("horaFimSextalinha4").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha4 = document.getElementById("horaInicioSabadolinha4").value.split(':').map(Number);
    var horaFimSabadolinha4 = document.getElementById("horaFimSabadolinha4").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha4 = document.getElementById("horaInicioDomingolinha4").value.split(':').map(Number);
    var horaFimDomingolinha4 = document.getElementById("horaFimDomingolinha4").value.split(':').map(Number);


    var diferecaHoraTotallinha4 = ((horaFimSegundalinha4[0]*60 + horaFimSegundalinha4[1])+(horaFimTercalinha4[0]*60 + horaFimTercalinha4[1])+(horaFimQuartalinha4[0]*60 + horaFimQuartalinha4[1])+(horaFimQuintalinha4[0]*60 + horaFimQuintalinha4[1])+(horaFimSextalinha4[0]*60 + horaFimSextalinha4[1])+(horaFimSabadolinha4[0]*60 + horaFimSabadolinha4[1])+(horaFimDomingolinha4[0]*60 + horaFimDomingolinha4[1]))-((horaInicioSegundalinha4[0]*60 + horaInicioSegundalinha4[1])+(horaInicioTercalinha4[0]*60 + horaInicioTercalinha4[1])+(horaInicioQuartalinha4[0]*60 + horaInicioQuartalinha4[1])+(horaInicioQuintalinha4[0]*60 + horaInicioQuintalinha4[1])+(horaInicioSextalinha4[0]*60 + horaInicioSextalinha4[1])+(horaInicioSabadolinha4[0]*60 + horaInicioSabadolinha4[1])+(horaInicioDomingolinha4[0]*60 + horaInicioDomingolinha4[1]))
    if (diferecaHoraTotallinha4 <= 0){
        diferecaHoraTotallinha4 = 0
    }


    var MMHoraTotallinha4 = diferecaHoraTotallinha4%60;MMHoraTotallinha4.toString().length==1?MMHoraTotallinha4="0"+MMHoraTotallinha4:0;
    if(isNaN(diferecaHoraTotallinha4)) return;
    

    resultadoHoraTotallinha4 = Math.floor((diferecaHoraTotallinha4)/60) + "Hora(s) e " + MMHoraTotallinha4 + "minuto(s)";
    

    document.getElementById("horaTotallinha4").value = resultadoHoraTotallinha3;
});


$('#linha5 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha5 = document.getElementById("horaInicioSegundalinha5").value.split(':').map(Number);
    var horaFimSegundalinha5 = document.getElementById("horaFimSegundalinha5").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha5 = document.getElementById("horaInicioTercalinha5").value.split(':').map(Number);
    var horaFimTercalinha5 = document.getElementById("horaFimTercalinha5").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha5 = document.getElementById("horaInicioQuartalinha5").value.split(':').map(Number);
    var horaFimQuartalinha5 = document.getElementById("horaFimQuartalinha5").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha5 = document.getElementById("horaInicioQuintalinha5").value.split(':').map(Number);
    var horaFimQuintalinha5 = document.getElementById("horaFimQuintalinha5").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha5 = document.getElementById("horaInicioSextalinha5").value.split(':').map(Number);
    var horaFimSextalinha5 = document.getElementById("horaFimSextalinha5").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha5 = document.getElementById("horaInicioSabadolinha5").value.split(':').map(Number);
    var horaFimSabadolinha5 = document.getElementById("horaFimSabadolinha5").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha5 = document.getElementById("horaInicioDomingolinha5").value.split(':').map(Number);
    var horaFimDomingolinha5 = document.getElementById("horaFimDomingolinha5").value.split(':').map(Number);


    var diferecaHoraTotallinha5 = ((horaFimSegundalinha5[0]*60 + horaFimSegundalinha5[1])+(horaFimTercalinha5[0]*60 + horaFimTercalinha5[1])+(horaFimQuartalinha5[0]*60 + horaFimQuartalinha5[1])+(horaFimQuintalinha5[0]*60 + horaFimQuintalinha5[1])+(horaFimSextalinha5[0]*60 + horaFimSextalinha5[1])+(horaFimSabadolinha5[0]*60 + horaFimSabadolinha5[1])+(horaFimDomingolinha5[0]*60 + horaFimDomingolinha5[1]))-((horaInicioSegundalinha5[0]*60 + horaInicioSegundalinha5[1])+(horaInicioTercalinha5[0]*60 + horaInicioTercalinha5[1])+(horaInicioQuartalinha5[0]*60 + horaInicioQuartalinha5[1])+(horaInicioQuintalinha5[0]*60 + horaInicioQuintalinha5[1])+(horaInicioSextalinha5[0]*60 + horaInicioSextalinha5[1])+(horaInicioSabadolinha5[0]*60 + horaInicioSabadolinha5[1])+(horaInicioDomingolinha5[0]*60 + horaInicioDomingolinha5[1]))
    if (diferecaHoraTotallinha5 <= 0){
        diferecaHoraTotallinha5 = 0
    }


    var MMHoraTotallinha5 = diferecaHoraTotallinha5%60;MMHoraTotallinha5.toString().length==1?MMHoraTotallinha5="0"+MMHoraTotallinha5:0;
    if(isNaN(diferecaHoraTotallinha5)) return;
    

    resultadoHoraTotallinha5 = Math.floor((diferecaHoraTotallinha5)/60) + "Hora(s) e " + MMHoraTotallinha5 + "minuto(s)";
    

    document.getElementById("horaTotallinha5").value = resultadoHoraTotallinha5;
});


$('#linha6 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha6 = document.getElementById("horaInicioSegundalinha6").value.split(':').map(Number);
    var horaFimSegundalinha6 = document.getElementById("horaFimSegundalinha6").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha6 = document.getElementById("horaInicioTercalinha6").value.split(':').map(Number);
    var horaFimTercalinha6 = document.getElementById("horaFimTercalinha6").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha6 = document.getElementById("horaInicioQuartalinha6").value.split(':').map(Number);
    var horaFimQuartalinha6 = document.getElementById("horaFimQuartalinha6").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha6 = document.getElementById("horaInicioQuintalinha6").value.split(':').map(Number);
    var horaFimQuintalinha6 = document.getElementById("horaFimQuintalinha6").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha6 = document.getElementById("horaInicioSextalinha6").value.split(':').map(Number);
    var horaFimSextalinha6 = document.getElementById("horaFimSextalinha6").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha6 = document.getElementById("horaInicioSabadolinha6").value.split(':').map(Number);
    var horaFimSabadolinha6 = document.getElementById("horaFimSabadolinha6").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha6 = document.getElementById("horaInicioDomingolinha6").value.split(':').map(Number);
    var horaFimDomingolinha6 = document.getElementById("horaFimDomingolinha6").value.split(':').map(Number);


    var diferecaHoraTotallinha6 = ((horaFimSegundalinha6[0]*60 + horaFimSegundalinha6[1])+(horaFimTercalinha6[0]*60 + horaFimTercalinha6[1])+(horaFimQuartalinha6[0]*60 + horaFimQuartalinha6[1])+(horaFimQuintalinha6[0]*60 + horaFimQuintalinha6[1])+(horaFimSextalinha6[0]*60 + horaFimSextalinha6[1])+(horaFimSabadolinha6[0]*60 + horaFimSabadolinha6[1])+(horaFimDomingolinha6[0]*60 + horaFimDomingolinha6[1]))-((horaInicioSegundalinha6[0]*60 + horaInicioSegundalinha6[1])+(horaInicioTercalinha6[0]*60 + horaInicioTercalinha6[1])+(horaInicioQuartalinha6[0]*60 + horaInicioQuartalinha6[1])+(horaInicioQuintalinha6[0]*60 + horaInicioQuintalinha6[1])+(horaInicioSextalinha6[0]*60 + horaInicioSextalinha6[1])+(horaInicioSabadolinha6[0]*60 + horaInicioSabadolinha6[1])+(horaInicioDomingolinha6[0]*60 + horaInicioDomingolinha6[1]))
    if (diferecaHoraTotallinha6 <= 0){
        diferecaHoraTotallinha6 = 0
    }


    var MMHoraTotallinha6 = diferecaHoraTotallinha6%60;MMHoraTotallinha6.toString().length==1?MMHoraTotallinha6="0"+MMHoraTotallinha6:0;
    if(isNaN(diferecaHoraTotallinha6)) return;
    

    resultadoHoraTotallinha6 = Math.floor((diferecaHoraTotallinha6)/60) + "Hora(s) e " + MMHoraTotallinha6 + "minuto(s)";
    

    document.getElementById("horaTotallinha6").value = resultadoHoraTotallinha6;
});


$('#linha7 .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundalinha7 = document.getElementById("horaInicioSegundalinha7").value.split(':').map(Number);
    var horaFimSegundalinha7 = document.getElementById("horaFimSegundalinha7").value.split(':').map(Number);
    //Terca
    var horaInicioTercalinha7 = document.getElementById("horaInicioTercalinha7").value.split(':').map(Number);
    var horaFimTercalinha7 = document.getElementById("horaFimTercalinha7").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartalinha7 = document.getElementById("horaInicioQuartalinha7").value.split(':').map(Number);
    var horaFimQuartalinha7 = document.getElementById("horaFimQuartalinha7").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintalinha7 = document.getElementById("horaInicioQuintalinha7").value.split(':').map(Number);
    var horaFimQuintalinha7 = document.getElementById("horaFimQuintalinha7").value.split(':').map(Number);
    //Sexta
    var horaInicioSextalinha7 = document.getElementById("horaInicioSextalinha7").value.split(':').map(Number);
    var horaFimSextalinha7 = document.getElementById("horaFimSextalinha7").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadolinha7 = document.getElementById("horaInicioSabadolinha7").value.split(':').map(Number);
    var horaFimSabadolinha7 = document.getElementById("horaFimSabadolinha7").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingolinha7 = document.getElementById("horaInicioDomingolinha7").value.split(':').map(Number);
    var horaFimDomingolinha7 = document.getElementById("horaFimDomingolinha7").value.split(':').map(Number);


    var diferecaHoraTotallinha7 = ((horaFimSegundalinha7[0]*60 + horaFimSegundalinha7[1])+(horaFimTercalinha7[0]*60 + horaFimTercalinha7[1])+(horaFimQuartalinha7[0]*60 + horaFimQuartalinha7[1])+(horaFimQuintalinha7[0]*60 + horaFimQuintalinha7[1])+(horaFimSextalinha7[0]*60 + horaFimSextalinha7[1])+(horaFimSabadolinha7[0]*60 + horaFimSabadolinha7[1])+(horaFimDomingolinha7[0]*60 + horaFimDomingolinha7[1]))-((horaInicioSegundalinha7[0]*60 + horaInicioSegundalinha7[1])+(horaInicioTercalinha7[0]*60 + horaInicioTercalinha7[1])+(horaInicioQuartalinha7[0]*60 + horaInicioQuartalinha7[1])+(horaInicioQuintalinha7[0]*60 + horaInicioQuintalinha7[1])+(horaInicioSextalinha7[0]*60 + horaInicioSextalinha7[1])+(horaInicioSabadolinha7[0]*60 + horaInicioSabadolinha7[1])+(horaInicioDomingolinha7[0]*60 + horaInicioDomingolinha7[1]))
    if (diferecaHoraTotallinha7 <= 0){
        diferecaHoraTotallinha7 = 0
    }


    var MMHoraTotallinha7 = diferecaHoraTotallinha7%60;MMHoraTotallinha7.toString().length==1?MMHoraTotallinha7="0"+MMHoraTotallinha7:0;
    if(isNaN(diferecaHoraTotallinha7)) return;
    

    resultadoHoraTotallinha7 = Math.floor((diferecaHoraTotallinha7)/60) + "Hora(s) e " + MMHoraTotallinha7 + "minuto(s)";
    

    document.getElementById("horaTotallinha7").value = resultadoHoraTotallinha7;
});




$('.hora').on('change',function(){
    var horaTotallinha1 = document.getElementById("horaTotallinha1").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha2 = document.getElementById("horaTotallinha2").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha3 = document.getElementById("horaTotallinha3").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha4 = document.getElementById("horaTotallinha4").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha5 = document.getElementById("horaTotallinha5").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha6 = document.getElementById("horaTotallinha6").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotallinha7 = document.getElementById("horaTotallinha7").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);

    var horasTotais = (horaTotallinha1[0]*60 + horaTotallinha1[1]) + (horaTotallinha2[0]*60 + horaTotallinha2[1]) + (horaTotallinha3[0]*60 + horaTotallinha3[1]) + (horaTotallinha4[0]*60 + horaTotallinha4[1]) + (horaTotallinha5[0]*60 + horaTotallinha5[1]) + (horaTotallinha6[0]*60 + horaTotallinha6[1]) + (horaTotallinha7[0]*60 + horaTotallinha7[1]);


    var MMHorasTotais = horasTotais%60;MMHorasTotais.toString().length==1?MMHorasTotais="0"+MMHorasTotais:0;
    if(isNaN(horasTotais)) return;
    

    resultadoHorasTotais = Math.floor((horasTotais)/60) + "Hora(s) e " + MMHorasTotais + "minuto(s)";


    document.getElementById("horasTotais").value = resultadoHorasTotais;
});



$('#conteudoDiaSemanaSegundalinha1 .hora').on('change',function(){
    var horaInicioSegundalinha1 = document.getElementById("horaInicioSegundalinha1");
    var horaFimSegundalinha1 = document.getElementById("horaFimSegundalinha1");
    
    if (horaInicioSegundalinha1.value == "00:00" && horaFimSegundalinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha1.value == "" || horaFimSegundalinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha1 .hora').on('change',function(){
    var horaInicioTercalinha1 = document.getElementById("horaInicioTercalinha1");
    var horaFimTercalinha1 = document.getElementById("horaFimTercalinha1");
    
    if (horaInicioTercalinha1.value == "00:00" && horaFimTercalinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha1.value == "" || horaFimTercalinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha1 .hora').on('change',function(){
    var horaInicioQuartalinha1 = document.getElementById("horaInicioQuartalinha1");
    var horaFimQuartalinha1 = document.getElementById("horaFimQuartalinha1");
    
    if (horaInicioQuartalinha1.value == "00:00" && horaFimQuartalinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha1.value == "" || horaFimQuartalinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha1 .hora').on('change',function(){
    var horaInicioQuintalinha1 = document.getElementById("horaInicioQuintalinha1");
    var horaFimQuintalinha1 = document.getElementById("horaFimQuintalinha1");
    
    if (horaInicioQuintalinha1.value == "00:00" && horaFimQuintalinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha1.value == "" || horaFimQuintalinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha1 .hora').on('change',function(){
    var horaInicioSextalinha1 = document.getElementById("horaInicioSextalinha1");
    var horaFimSextalinha1 = document.getElementById("horaFimSextalinha1");
    
    if (horaInicioSextalinha1.value == "00:00" && horaFimSextalinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha1.value == "" || horaFimSextalinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha1 .hora').on('change',function(){
    var horaInicioSabadolinha1 = document.getElementById("horaInicioSabadolinha1");
    var horaFimSabadolinha1 = document.getElementById("horaFimSabadolinha1");
    
    if (horaInicioSabadolinha1.value == "00:00" && horaFimSabadolinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha1.value == "" || horaFimSabadolinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha1 .hora').on('change',function(){
    var horaInicioDomingolinha1 = document.getElementById("horaInicioDomingolinha1");
    var horaFimDomingolinha1 = document.getElementById("horaFimDomingolinha1");
    
    if (horaInicioDomingolinha1.value == "00:00" && horaFimDomingolinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha1.value == "" || horaFimDomingolinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha1').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha2 .hora').on('change',function(){
    var horaInicioSegundalinha2 = document.getElementById("horaInicioSegundalinha2");
    var horaFimSegundalinha2 = document.getElementById("horaFimSegundalinha2");
    
    if (horaInicioSegundalinha2.value == "00:00" && horaFimSegundalinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha2.value == "" || horaFimSegundalinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha2 .hora').on('change',function(){
    var horaInicioTercalinha2 = document.getElementById("horaInicioTercalinha2");
    var horaFimTercalinha2 = document.getElementById("horaFimTercalinha2");
    
    if (horaInicioTercalinha2.value == "00:00" && horaFimTercalinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha2.value == "" || horaFimTercalinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha2 .hora').on('change',function(){
    var horaInicioQuartalinha2 = document.getElementById("horaInicioQuartalinha2");
    var horaFimQuartalinha2 = document.getElementById("horaFimQuartalinha2");
    
    if (horaInicioQuartalinha2.value == "00:00" && horaFimQuartalinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha2.value == "" || horaFimQuartalinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha2 .hora').on('change',function(){
    var horaInicioQuintalinha2 = document.getElementById("horaInicioQuintalinha2");
    var horaFimQuintalinha2 = document.getElementById("horaFimQuintalinha2");
    
    if (horaInicioQuintalinha2.value == "00:00" && horaFimQuintalinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha2.value == "" || horaFimQuintalinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha2 .hora').on('change',function(){
    var horaInicioSextalinha2 = document.getElementById("horaInicioSextalinha2");
    var horaFimSextalinha2 = document.getElementById("horaFimSextalinha2");
    
    if (horaInicioSextalinha2.value == "00:00" && horaFimSextalinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha2.value == "" || horaFimSextalinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha2 .hora').on('change',function(){
    var horaInicioSabadolinha2 = document.getElementById("horaInicioSabadolinha2");
    var horaFimSabadolinha2 = document.getElementById("horaFimSabadolinha2");
    
    if (horaInicioSabadolinha2.value == "00:00" && horaFimSabadolinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha2.value == "" || horaFimSabadolinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha2 .hora').on('change',function(){
    var horaInicioDomingolinha2 = document.getElementById("horaInicioDomingolinha2");
    var horaFimDomingolinha2 = document.getElementById("horaFimDomingolinha2");
    
    if (horaInicioDomingolinha2.value == "00:00" && horaFimDomingolinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha2.value == "" || horaFimDomingolinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha2').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha3 .hora').on('change',function(){
    var horaInicioSegundalinha3 = document.getElementById("horaInicioSegundalinha3");
    var horaFimSegundalinha3 = document.getElementById("horaFimSegundalinha3");
    
    if (horaInicioSegundalinha3.value == "00:00" && horaFimSegundalinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha3.value == "" || horaFimSegundalinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha3 .hora').on('change',function(){
    var horaInicioTercalinha3 = document.getElementById("horaInicioTercalinha3");
    var horaFimTercalinha3 = document.getElementById("horaFimTercalinha3");
    
    if (horaInicioTercalinha3.value == "00:00" && horaFimTercalinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha3.value == "" || horaFimTercalinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha3 .hora').on('change',function(){
    var horaInicioQuartalinha3 = document.getElementById("horaInicioQuartalinha3");
    var horaFimQuartalinha3 = document.getElementById("horaFimQuartalinha3");
    
    if (horaInicioQuartalinha3.value == "00:00" && horaFimQuartalinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha3.value == "" || horaFimQuartalinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha3 .hora').on('change',function(){
    var horaInicioQuintalinha3 = document.getElementById("horaInicioQuintalinha3");
    var horaFimQuintalinha3 = document.getElementById("horaFimQuintalinha3");
    
    if (horaInicioQuintalinha3.value == "00:00" && horaFimQuintalinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha3.value == "" || horaFimQuintalinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha3 .hora').on('change',function(){
    var horaInicioSextalinha3 = document.getElementById("horaInicioSextalinha3");
    var horaFimSextalinha3 = document.getElementById("horaFimSextalinha3");
    
    if (horaInicioSextalinha3.value == "00:00" && horaFimSextalinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha3.value == "" || horaFimSextalinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha3 .hora').on('change',function(){
    var horaInicioSabadolinha3 = document.getElementById("horaInicioSabadolinha3");
    var horaFimSabadolinha3 = document.getElementById("horaFimSabadolinha3");
    
    if (horaInicioSabadolinha3.value == "00:00" && horaFimSabadolinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha3.value == "" || horaFimSabadolinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha3 .hora').on('change',function(){
    var horaInicioDomingolinha3 = document.getElementById("horaInicioDomingolinha3");
    var horaFimDomingolinha3 = document.getElementById("horaFimDomingolinha3");
    
    if (horaInicioDomingolinha3.value == "00:00" && horaFimDomingolinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha3.value == "" || horaFimDomingolinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha3').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha4 .hora').on('change',function(){
    var horaInicioSegundalinha4 = document.getElementById("horaInicioSegundalinha4");
    var horaFimSegundalinha4 = document.getElementById("horaFimSegundalinha4");
    
    if (horaInicioSegundalinha4.value == "00:00" && horaFimSegundalinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha4.value == "" || horaFimSegundalinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha4 .hora').on('change',function(){
    var horaInicioTercalinha4 = document.getElementById("horaInicioTercalinha4");
    var horaFimTercalinha4 = document.getElementById("horaFimTercalinha4");
    
    if (horaInicioTercalinha4.value == "00:00" && horaFimTercalinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha4.value == "" || horaFimTercalinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha4 .hora').on('change',function(){
    var horaInicioQuartalinha4 = document.getElementById("horaInicioQuartalinha4");
    var horaFimQuartalinha4 = document.getElementById("horaFimQuartalinha4");
    
    if (horaInicioQuartalinha4.value == "00:00" && horaFimQuartalinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha4.value == "" || horaFimQuartalinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha4 .hora').on('change',function(){
    var horaInicioQuintalinha4 = document.getElementById("horaInicioQuintalinha4");
    var horaFimQuintalinha4 = document.getElementById("horaFimQuintalinha4");
    
    if (horaInicioQuintalinha4.value == "00:00" && horaFimQuintalinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha4.value == "" || horaFimQuintalinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha4 .hora').on('change',function(){
    var horaInicioSextalinha4 = document.getElementById("horaInicioSextalinha4");
    var horaFimSextalinha4 = document.getElementById("horaFimSextalinha4");
    
    if (horaInicioSextalinha4.value == "00:00" && horaFimSextalinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha4.value == "" || horaFimSextalinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha4 .hora').on('change',function(){
    var horaInicioSabadolinha4 = document.getElementById("horaInicioSabadolinha4");
    var horaFimSabadolinha4 = document.getElementById("horaFimSabadolinha4");
    
    if (horaInicioSabadolinha4.value == "00:00" && horaFimSabadolinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha4.value == "" || horaFimSabadolinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha4 .hora').on('change',function(){
    var horaInicioDomingolinha4 = document.getElementById("horaInicioDomingolinha4");
    var horaFimDomingolinha4 = document.getElementById("horaFimDomingolinha4");
    
    if (horaInicioDomingolinha4.value == "00:00" && horaFimDomingolinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha4.value == "" || horaFimDomingolinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha4').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha5 .hora').on('change',function(){
    var horaInicioSegundalinha5 = document.getElementById("horaInicioSegundalinha5");
    var horaFimSegundalinha5 = document.getElementById("horaFimSegundalinha5");
    
    if (horaInicioSegundalinha5.value == "00:00" && horaFimSegundalinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha5.value == "" || horaFimSegundalinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha5 .hora').on('change',function(){
    var horaInicioTercalinha5 = document.getElementById("horaInicioTercalinha5");
    var horaFimTercalinha5 = document.getElementById("horaFimTercalinha5");
    
    if (horaInicioTercalinha5.value == "00:00" && horaFimTercalinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha5.value == "" || horaFimTercalinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha5 .hora').on('change',function(){
    var horaInicioQuartalinha5 = document.getElementById("horaInicioQuartalinha5");
    var horaFimQuartalinha5 = document.getElementById("horaFimQuartalinha5");
    
    if (horaInicioQuartalinha5.value == "00:00" && horaFimQuartalinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha5.value == "" || horaFimQuartalinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha5 .hora').on('change',function(){
    var horaInicioQuintalinha5 = document.getElementById("horaInicioQuintalinha5");
    var horaFimQuintalinha5 = document.getElementById("horaFimQuintalinha5");
    
    if (horaInicioQuintalinha5.value == "00:00" && horaFimQuintalinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha5.value == "" || horaFimQuintalinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha5 .hora').on('change',function(){
    var horaInicioSextalinha5 = document.getElementById("horaInicioSextalinha5");
    var horaFimSextalinha5 = document.getElementById("horaFimSextalinha5");
    
    if (horaInicioSextalinha5.value == "00:00" && horaFimSextalinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha5.value == "" || horaFimSextalinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha5 .hora').on('change',function(){
    var horaInicioSabadolinha5 = document.getElementById("horaInicioSabadolinha5");
    var horaFimSabadolinha5 = document.getElementById("horaFimSabadolinha5");
    
    if (horaInicioSabadolinha5.value == "00:00" && horaFimSabadolinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha5.value == "" || horaFimSabadolinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha5 .hora').on('change',function(){
    var horaInicioDomingolinha5 = document.getElementById("horaInicioDomingolinha5");
    var horaFimDomingolinha5 = document.getElementById("horaFimDomingolinha5");
    
    if (horaInicioDomingolinha5.value == "00:00" && horaFimDomingolinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha5.value == "" || horaFimDomingolinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha5').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha6 .hora').on('change',function(){
    var horaInicioSegundalinha6 = document.getElementById("horaInicioSegundalinha6");
    var horaFimSegundalinha6 = document.getElementById("horaFimSegundalinha6");
    
    if (horaInicioSegundalinha6.value == "00:00" && horaFimSegundalinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha6.value == "" || horaFimSegundalinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha6 .hora').on('change',function(){
    var horaInicioTercalinha6 = document.getElementById("horaInicioTercalinha6");
    var horaFimTercalinha6 = document.getElementById("horaFimTercalinha6");
    
    if (horaInicioTercalinha6.value == "00:00" && horaFimTercalinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha6.value == "" || horaFimTercalinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha6 .hora').on('change',function(){
    var horaInicioQuartalinha6 = document.getElementById("horaInicioQuartalinha6");
    var horaFimQuartalinha6 = document.getElementById("horaFimQuartalinha6");
    
    if (horaInicioQuartalinha6.value == "00:00" && horaFimQuartalinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha6.value == "" || horaFimQuartalinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha6 .hora').on('change',function(){
    var horaInicioQuintalinha6 = document.getElementById("horaInicioQuintalinha6");
    var horaFimQuintalinha6 = document.getElementById("horaFimQuintalinha6");
    
    if (horaInicioQuintalinha6.value == "00:00" && horaFimQuintalinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha6.value == "" || horaFimQuintalinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha6 .hora').on('change',function(){
    var horaInicioSextalinha6 = document.getElementById("horaInicioSextalinha6");
    var horaFimSextalinha6 = document.getElementById("horaFimSextalinha6");
    
    if (horaInicioSextalinha6.value == "00:00" && horaFimSextalinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha6.value == "" || horaFimSextalinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha6 .hora').on('change',function(){
    var horaInicioSabadolinha6 = document.getElementById("horaInicioSabadolinha6");
    var horaFimSabadolinha6 = document.getElementById("horaFimSabadolinha6");
    
    if (horaInicioSabadolinha6.value == "00:00" && horaFimSabadolinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha6.value == "" || horaFimSabadolinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha6').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha6 .hora').on('change',function(){
    var horaInicioDomingolinha6 = document.getElementById("horaInicioDomingolinha6");
    var horaFimDomingolinha6 = document.getElementById("horaFimDomingolinha6");
    
    if (horaInicioDomingolinha6.value == "00:00" && horaFimDomingolinha6.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha6').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha6.value == "" || horaFimDomingolinha6.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha6').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha6').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundalinha7 .hora').on('change',function(){
    var horaInicioSegundalinha7 = document.getElementById("horaInicioSegundalinha7");
    var horaFimSegundalinha7 = document.getElementById("horaFimSegundalinha7");
    
    if (horaInicioSegundalinha7.value == "00:00" && horaFimSegundalinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundalinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundalinha7.value == "" || horaFimSegundalinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundalinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundalinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercalinha7 .hora').on('change',function(){
    var horaInicioTercalinha7 = document.getElementById("horaInicioTercalinha7");
    var horaFimTercalinha7 = document.getElementById("horaFimTercalinha7");
    
    if (horaInicioTercalinha7.value == "00:00" && horaFimTercalinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercalinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercalinha7.value == "" || horaFimTercalinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaTercalinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercalinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartalinha7 .hora').on('change',function(){
    var horaInicioQuartalinha7 = document.getElementById("horaInicioQuartalinha7");
    var horaFimQuartalinha7 = document.getElementById("horaFimQuartalinha7");
    
    if (horaInicioQuartalinha7.value == "00:00" && horaFimQuartalinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartalinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartalinha7.value == "" || horaFimQuartalinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartalinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartalinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintalinha7 .hora').on('change',function(){
    var horaInicioQuintalinha7 = document.getElementById("horaInicioQuintalinha7");
    var horaFimQuintalinha7 = document.getElementById("horaFimQuintalinha7");
    
    if (horaInicioQuintalinha7.value == "00:00" && horaFimQuintalinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintalinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintalinha7.value == "" || horaFimQuintalinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintalinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintalinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextalinha7 .hora').on('change',function(){
    var horaInicioSextalinha7 = document.getElementById("horaInicioSextalinha7");
    var horaFimSextalinha7 = document.getElementById("horaFimSextalinha7");
    
    if (horaInicioSextalinha7.value == "00:00" && horaFimSextalinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextalinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextalinha7.value == "" || horaFimSextalinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaSextalinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextalinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadolinha7 .hora').on('change',function(){
    var horaInicioSabadolinha7 = document.getElementById("horaInicioSabadolinha7");
    var horaFimSabadolinha7 = document.getElementById("horaFimSabadolinha7");
    
    if (horaInicioSabadolinha7.value == "00:00" && horaFimSabadolinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadolinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadolinha7.value == "" || horaFimSabadolinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadolinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadolinha7').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingolinha7 .hora').on('change',function(){
    var horaInicioDomingolinha7 = document.getElementById("horaInicioDomingolinha7");
    var horaFimDomingolinha7 = document.getElementById("horaFimDomingolinha7");
    
    if (horaInicioDomingolinha7.value == "00:00" && horaFimDomingolinha7.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingolinha7').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingolinha7.value == "" || horaFimDomingolinha7.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingolinha7').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingolinha7').style.backgroundColor = "#E5E8E7";
    }
});