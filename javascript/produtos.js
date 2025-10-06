/*Declaração de variaveis e consulta do id produto e quantidade no carrinho do usuário no banco de dados*/
var id_pessoa = localStorage.getItem("id_pessoa");
var quantidade = 0;
var qtdd = 0;
var cont = 0;
var resposta = "";
document.getElementById("quantidades").value = id_pessoa;
quantidades();


function quantidades() {
    var objetoForm = document.getElementById("formQuantidades");
    var dados = new FormData(objetoForm);

    fetch("../php/quantidades.php", {
        method: "POST",
        body: dados,
    }).then(async function(resposta){
        qtdd = await resposta.json();
        resposta = qtdd[0]["status"];
    })
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Extrai os produtos disponiveis no banco de dados e mostra em um card com o botão de adicionar ao carrinho onde é possivel adicionar mais vezes um mesmo produto no carrinho, aumentando assim a quantidade comprada no banco de dados*/
fetch("../php/produtos.php", {
    method: "GET"
}).then(async function (resposta) {
    var objeto = await resposta.json();
    listarProdutos(objeto);
});

function listarProdutos(produto){
    for (var i = 0; i < produto.length; i++) {
        conteudo = '';
        conteudo += '<div class="card">';
        conteudo += '    <div><img src="../imagens/'+ (i + 1) +'.png" width="250" height="170"></div>';
        conteudo += '    <div>'+ produto[i].nome +'</div>';
        conteudo += '    <div>R$'+ produto[i].preco +'</div>';
        conteudo += '    <div>' + produto[i].descricao + '</div>';
        conteudo += '    <div> <input type="hidden" id="quantidade' + i + '" name="quantidade' + i + '"> </div>';
        conteudo += '    <div class="add_carr"><button type="button" onclick="carrinho(' + produto[i].id_produto + ',' + i +')">Adicionar ao carrinho </button></div>';
        conteudo += '</div>';
        document.getElementById("produto").innerHTML += conteudo;
    }
        for (var c = 0; c < produto.length; c++) {
            document.getElementById("quantidade" + c).value = quantidade;
        }
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Quando o botão adicionar ao carrinho é clicado salva no banco de dados o id da pessoa do produto e a quantidade daquele produto comprado pelo usuário*/
function carrinho(id, i){

    document.getElementById("id_produto").value = id;
    document.getElementById("id_pessoa").value = id_pessoa;

    for (var c = 0; c < qtdd.length; c++) {
        console.log(id);
        console.log(qtdd[c].id_produto);
        if (id == qtdd[c].id_produto && cont <= 0) {
            document.getElementById("quantidade" + i).value = qtdd[c].quantidade;  
            cont += 1  
        }
    }
    
    document.getElementById("quantidade" + i).value = (parseInt(document.getElementById("quantidade" + i).value) + 1);
    document.getElementById("quantidade").value = document.getElementById("quantidade" + i).value;

    var objetoForm = document.getElementById("formCarrinho");
    var dados = new FormData(objetoForm);

    fetch("../php/carrinho.php", {
        method: "POST",
        body: dados,
    }).then(async function (resposta) {
        var objeto = await resposta.json();
        console.log(objeto);
    });
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Troca de página*/
function pagina_principal() {
    window.location.href = "pagina_principal.html"
}
function pagina_carrinho() {
    window.location.href = "carrinho.html"
}
/*-----------------------------------------------------------------------------------------------------------*/
