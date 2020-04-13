//alterando as contagens
var campoDigitacao = $(".campoDigitacao");
var tempoInicial = $("#contadorTempo").text();
var botao = $("#botaoReniciar");


//$(document).ready(function(){ -- atalho em baixo
$(function(){
    atualizaTamanhoFrase();
    inicializaCronometro();
    inicializaContadores();
    reniciaJogo();
    inicializaMarcadores();
   
});

function inicializaCronometro(){
    
    campoDigitacao.on("focus", function(){
        var contadorTempo = $("#contadorTempo").text();

            var cronometro = setInterval(function(){
                contadorTempo--;
        
                var contadorPagina = $("#contadorTempo");
                contadorPagina.text(contadorTempo);

                if(contadorTempo < 1){
                    clearInterval(cronometro);
                    finalizaJogo();
                }
                
            }, 1000);
    });

}

function inicializaContadores(){
    
    campoDigitacao.on("input", function(){
        var valorCampo = campoDigitacao.val();
        var conteudoCampo = campoDigitacao.val().length;
        var qtdadePalavras = valorCampo.split(/\S+/).length - 1;

        var contadorPalavras = $("#contadorPalavras");
        contadorPalavras.text(qtdadePalavras);

        var contadorCaracteres = $("#contadorCaracteres");
        contadorCaracteres.text(conteudoCampo);
    });

}

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numFrase = frase.split(" ").length;
    var tamanhoDaFrase = $("#tamanhoDaFrase");
    tamanhoDaFrase.text(numFrase);

}

function reniciaJogo(){
    botao.click(function(){
        campoDigitacao.attr("disabled", false);
        campoDigitacao.val("");
        $("#contadorPalavras").text("0");
        $("#contadorCaracteres").text("0");
        $("#contadorTempo").text(tempoInicial);
        campoDigitacao.toggleClass("campoDesativado");
        campoDigitacao.removeClass("bordaCerta");
        campoDigitacao.removeClass("bordaErrada");
        
    })    
}

function inicializaMarcadores(){
    var frase = $(".frase").text();
    campoDigitacao.on("input", (function() {
        var conteudo = campoDigitacao.val();
        var comparavel = frase.substr(0, conteudo.length);
        console.log(comparavel);
        console.log(conteudo);
        
        if(conteudo == comparavel){
            campoDigitacao.removeClass("bordaErrada");
            campoDigitacao.addClass("bordaCerta");
        }else{
            campoDigitacao.removeClass("bordaCerta");
            campoDigitacao.addClass("bordaErrada");
        }
        
    
        })
    );
}


function finalizaJogo(){
    campoDigitacao.attr("disabled", true);
    campoDigitacao.toggleClass("campoDesativado");
    inserePlacar();
}

