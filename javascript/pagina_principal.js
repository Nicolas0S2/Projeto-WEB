/*Consulta o id do usuário no banco de dados a partir no e-mail fornecido no login e salva esse id em um localStorage e depoimentos dos clientes*/
var depoimento = [
    {nome: "João",
     idade: 20,
     comentario: "Ótimos produtos!"},
     {nome: "Ash",
     idade: 15,
     comentario: "Adorei os pokemons!"},
     {nome: "Marcos",
     idade: 30,
     comentario: "Comprarei mais pokemons aqui!"},
     {nome: "Alice",
     idade: 12,
     comentario: "Minha mãe é quem paga, mas já virei cliente!"}
]
for (var i = 0; i < depoimento.length; i++) {
    var conteudo = '';
    conteudo += '';
    conteudo += '<div class="card">';
    conteudo += '    <div>Nome: ' + depoimento[i].nome + '</div>';
    conteudo += '    <div>Idade: '+ depoimento[i].idade + ' anos</div>';
    conteudo +=     '<div>Comentário: '+ depoimento[i].comentario + '</div>';
    conteudo += '</div>';
    document.getElementById("depoimentos").innerHTML += conteudo;
}

var email = "";
var id_pessoa = "";
email = localStorage.getItem("email");
document.getElementById("id_email").value = email;
user();


function user(){
    var emailForm = document.getElementById("formEmail");
    var dadosEmail = new FormData(emailForm);

    fetch("../php/email.php", {
        method: "POST",
        body: dadosEmail,
    }).then(async function (resposta) {
        id_pessoa = await resposta.json();
        localStorage.setItem("id_pessoa", id_pessoa[0].id)
    });       
}
/*-----------------------------------------------------------------------------------------------------------*/


/*Troca de páginas*/
function produtos(){
    window.location.href = "produtos.html"
}

function carrinho(){
    window.location.href = "carrinho.html"

}
function facebook(){
    window.location.href = "https://www.facebook.com/";
}
function twitter(){
    window.location.href = "https://twitter.com/"
}
function pinterest(){
    window.location.href = "https://br.pinterest.com/"
}
function instagram(){
    window.location.href = "https://www.instagram.com/"
}
/*-----------------------------------------------------------------------------------------------------------*/
