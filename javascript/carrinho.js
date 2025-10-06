/*Declaração de variáveis, consulta do carrinho do usuário no banco de dados e apaga os registros onde a quantidade é igual a zero*/
var objeto = "";
var id = localStorage.getItem("id_pessoa");
document.getElementById("id_pessoa").value = id;
lista_carrinho();

function lista_carrinho() {

    var objetoForm = document.getElementById("formId");
    var dados = new FormData(objetoForm);

    fetch("../php/lista_carrinho.php", {
        method: "POST",
        body: dados,
    }).then(async function (resposta) {
        objeto = await resposta.json();
        if (objeto["status"] != 'n') {
            mostra_produto(objeto);            
        }
        else{
            document.getElementById("produtos").innerHTML = '<div class="ntem"><p>Não há produtos no carrinho! Clique <a href="produtos.html">aqui</a> e vá a página de produtos</p></div>';
        }
    });
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Mostra um card com os produtos do carrinho do usuário e suas respectivas quantidades. No card são apresentados 3 botões (+) adiciona uma unidade do produto no carrinho, (-) remove uma unidade do produto do carrinho e (atualizar carrinho) confirma a modificação salvando as alterações no banco de dados*/
function mostra_produto(produto) {

    for (var i = 0; i < produto.length; i++) {
        if (produto[i].contagem > 0) {
            var conteudo = "";
            conteudo = '';
            conteudo += '<div class="card">';
            conteudo += '    <div><img src="../imagens/'+ (produto[i].id_produto) +'.png" width="250" height="170"></div>';
            conteudo += '    <div>'+ produto[i].nome +'</div>';
            conteudo += '    <div>R$ '+ produto[i].preco +'</div>';
            conteudo += '    <div>'+ produto[i].descricao +'</div>';
            conteudo += '    <div class="botao"><button onclick="mais('+ (i) +')">+</button></div><div><button type="button"  onclick="atualizar_carrinho('+ produto[i].id_produto + ',' + i +')"> Atualizar do Carrinho </button></div><div class="botao"><button onclick="menos('+ (i) +')">-</button></div>';
            conteudo += '    <div><input type="text" size="1" id="num'+ i +'"></div>';
            conteudo += '</div>';
            document.getElementById("produtos").innerHTML += conteudo;
        }
    }
    for (var c = 0; c < produto.length; c++) {
        if (produto[c].contagem > 0) {
        document.getElementById("num" + c).value = produto[c].contagem;
        }
    }
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Botões (+) (-) e (atualizar carrinho)*/
function mais(i) {
    document.getElementById("num" + i).value = (parseInt(document.getElementById("num" + i).value) + 1);     
}
function menos(i) {
    document.getElementById("num" + i).value = (parseInt(document.getElementById("num" + i).value) - 1);
}


function atualizar_carrinho(id_produto, i){
    document.getElementById("pessoa").value = id;
    document.getElementById("produto").value = id_produto;
    document.getElementById("quantidade").value = document.getElementById("num" + i).value;

    var objetoForm = document.getElementById("formAtualiza");
    var dados = new FormData(objetoForm);

    fetch("../php/carrinho.php", {
        method: "POST",
        body: dados,
    }).then(async function (resposta) {
        objeto = await resposta.json();
        console.log(objeto);
        mostra_produto(objeto);
    });
    location.reload()
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Troca de página*/
function pagina_principal() {
    window.location.href = "pagina_principal.html"
}
function finalizar_compra() {
    if (objeto.length > 0 && objeto["status"] != "n") {
        window.location.href = "finalizar_compra.html"
    }
}
/*-----------------------------------------------------------------------------------------------------------*/
