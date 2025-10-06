<?php
    $email = $_POST["email"];
    $senha = $_POST["senha"];


    include "conexao.php";

    $query = "SELECT * FROM pessoa WHERE email = '$email' and senha = '$senha'";
    $registros = mysqli_query($conexao, $query);
    
    
    if (mysqli_num_rows($registros) == 1) {

        $retorno["status"] = "s";
        $retorno["mensagem"] = "Usuário autenticado!";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }
    else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Usuário ou senha incorretos!";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }

?>