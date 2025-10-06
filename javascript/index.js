var email = "";
/*Direciona o usuário para a página de cadastro*/
function cadastro(){
    window.location.href = "cadastro.html"
}
/*Salva o e-mail do usuário em um localStorage e verifica se o usuário está cadastrado no banco de dados, se estiver o direciona para a página principal se não da um mensagem de erro*/
function login(){
        document.getElementById("get_email").value = document.getElementById("email").value;
        email = document.getElementById("get_email").value;
        var objetoForm = document.getElementById("formLogin");
        var dados = new FormData(objetoForm);

        localStorage.setItem("email", email)

        fetch("../php/index.php", {
            method: "POST",
            body: dados,
        }).then(async function (resposta) {
            var objeto = await resposta.json();
            if (objeto["status"] == "s") {
                console.log(objeto["status"]);
                document.getElementById("email").value = '';
                document.getElementById("senha").value = '';
                document.getElementById("alert").innerHTML = '';
                window.location.href = "pagina_principal.html";
            }
            else{
                document.getElementById("alert").innerHTML = '';
                document.getElementById("alert").innerHTML += '<h3>Usuário ou senha incorretos!</h3>';
            }
        });       
}
/*-----------------------------------------------------------------------------------------------------------*/
