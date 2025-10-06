<?php
    
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $cSenha = $_POST["cSenha"];

    include "conexao.php";

    $query = "SELECT email FROM pessoa WHERE email = '$email'";
    
    $registros = mysqli_query($conexao, $query);

    if (mysqli_num_rows($registros) == 0 and $senha == $cSenha) {
        $query = "INSERT INTO pessoa(nome, cpf, email, senha) VALUES ('$nome', '$cpf', '$email', $senha)";
        mysqli_query($conexao, $query);

        $retorno["status"] = "s";
        $retorno["mensagem"] = "Gravado com sucesso";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }
    else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Esse usuário já existe";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }

?>