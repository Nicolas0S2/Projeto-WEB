/*Salva um novo cliente no banco de dados se ele ainda não existe no banco de dados e redireciona o usuário para a página de login quando o cadastro for realizardo com sucesso*/
function cadastrar(){
        if (document.getElementById("nome").value != '' &&
            document.getElementById("cpf").value != '' &&
            document.getElementById("email").value != '' &&
            document.getElementById("senha").value != '' &&
            document.getElementById("cSenha").value != '' &&
            document.getElementById("senha").value == document.getElementById("cSenha").value)
            {
                var objetoForm = document.getElementById("formCadastro");
                var dados = new FormData(objetoForm);
        
                fetch("../php/cadastro.php", {
                    method: "POST",
                    body: dados,
                }).then(async function (resposta) {
                    var objeto = await resposta.json();
                    if (objeto["status"] == "s") {
                        document.getElementById("alert").innerHTML = '';
                        document.getElementById("alert").innerHTML += '<h3>Usuário cadastrado com sucesso!</h3>';
                        setTimeout(function(){
                            window.location.href = "index.html"
                        }, 1500)

                    }
                    else{
                        document.getElementById("alert").innerHTML = '';
                        document.getElementById("alert").innerHTML += "<h3>Esse usuário já existe!</h3>";
                    }
                });
            }
}
/*-----------------------------------------------------------------------------------------------------------*/
