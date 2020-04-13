
function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Joao";
    var palavras = $("#contadorPalavras").text();
    var botaoRemover = '<a href="" class="botaoRemover"><i class="small material-icons">delete_sweep</i></a>'

    var linha = novaLinha(usuario, palavras);
    linha.find(".botaoRemover").click(removeLinha);

    corpoTabela.append(linha);

}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    

    var link =  $("<a>").addClass("botaoRemover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete_sweep");


    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;
}
function removeLinha(){
    event.preventDefault();
    $(this).parent().parent().remove(); // quer o pai do pai - parent

}; 