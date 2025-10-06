/*Consulta e mostra na tela informações do usuário e valor total*/
var email = localStorage.getItem("email");
var id = localStorage.getItem("id_pessoa")
var conteudo = '';
var pag = '';
var conteudoHTML = ''; 
document.getElementById("pix_db").value = '';
document.getElementById("num_card_db").value = '';
document.getElementById("nome_db").value = '';
document.getElementById("validade_db").value = '';
document.getElementById("digito_db").value = '';
document.getElementById("parcelas_db").value = '';

function gravar() {
    pag = document.getElementById("tipo_pagamento").value;
    document.getElementById("info").innerHTML = '';
    conteudoHTML = '';
    if (pag == 'Tipo') {
        document.getElementById("info").innerHTML += "<div>Escolha o tipo de pagamento!</div>"
    }
    else if (pag == 'Pix') {
        conteudoHTML += '<div><input type="text" name="pix" id="pix" class="input" placeholder="Chave-PIX"></div>';
        document.getElementById("info").innerHTML += conteudoHTML;
    }
    else if (pag == 'Acartao') {
        conteudoHTML += '<div><input type="text" name="num_card" id="num_card" class="input" placeholder="Número do cartão"></div>';
        conteudoHTML += '<div><input type="text" name="nome" id="nome" class="input" placeholder="Nome completo"></div>';
        conteudoHTML += '<div><input type="text" name="validade" id="validade" class="input" placeholder="MM/YY"></div>';
        conteudoHTML += '<div><input type="text" name="digito" id="digito" class="input" placeholder="000"></div>';

        document.getElementById("info").innerHTML += conteudoHTML;
    }
    else if (pag == 'Vcartao') {
        conteudoHTML += '<div><input type="text" name="num_card" id="num_card" class="input" placeholder="Número do cartão"></div>';
        conteudoHTML += '<div><input type="text" name="nome" id="nome" class="input" placeholder="Nome completo"></div>';
        conteudoHTML += '<div><input type="text" name="validade" id="validade" class="input" placeholder="MM/YY"></div>';
        conteudoHTML += '<div><input type="text" name="digito" id="digito" class="input" placeholder="000"></div>';
        conteudoHTML += '<div><input type="text" name="pacelas" id="parcela" class="input" placeholder="Número de vezes"></div>';
        document.getElementById("info").innerHTML += conteudoHTML;
    }
}

document.getElementById("pessoa").value = id;
document.getElementById("id_pessoa").value = id;
var objetoForm = document.getElementById("formTotal");
var dados = new FormData(objetoForm);

fetch("../php/finalizar_compra.php", {
    method: "POST",
    body: dados,
}).then(async function (resposta) {
    var objeto = await resposta.json();

    conteudo += '<div>Email: ' + email + '</div>';
    conteudo += '<div>Total à pagar: R$ ' + objeto + '</div>';
    document.getElementById("people").innerHTML += conteudo;
});
/*-----------------------------------------------------------------------------------------------------------*/


/*Salva as informações de compra no banco de dados e apaga os registros do carrinho do usuário*/
function finalizar_compra() {

    document.getElementById("tipoPagamento").value = document.getElementById("tipo_pagamento").value;
    if (document.getElementById("tipoPagamento").value == "Pix") {
        document.getElementById("pix_db").value = document.getElementById("pix").value;
    }
    else if (document.getElementById("tipoPagamento").value == "Acartao") {
        document.getElementById("num_card_db").value = document.getElementById("num_card").value;
        document.getElementById("nome_db").value = document.getElementById("nome").value;
        document.getElementById("validade_db").value = document.getElementById("validade").value;
        document.getElementById("digito_db").value = document.getElementById("digito").value;
    }
    else{
        document.getElementById("num_card_db").value = document.getElementById("num_card").value;
        document.getElementById("nome_db").value = document.getElementById("nome").value;
        document.getElementById("validade_db").value = document.getElementById("validade").value;
        document.getElementById("digito_db").value = document.getElementById("digito").value;
        document.getElementById("parcelas_db").value = document.getElementById("parcela").value;
    }

    var objetoForm = document.getElementById("formCompra");
    var dados = new FormData(objetoForm);

    fetch("../php/finalizar_compra02.php", {
        method: "POST",
        body: dados,
    });
    document.getElementById("alert").innerHTML = '';
    document.getElementById("alert").innerHTML += '<h3>Compra finalizada!</h3>';
    setTimeout(function(){
        window.location.href = "pagina_principal.html"
    }, 1500)
}
/*-----------------------------------------------------------------------------------------------------------*/
