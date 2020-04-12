var frase = $(".frase").text();

var numFrase = frase.split(" ").length;

var tamanhoDaFrase = $("#tamanhoDaFrase");
tamanhoDaFrase.text(numFrase);

