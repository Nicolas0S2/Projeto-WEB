<?php

    $id_produto = $_POST["produto"];
    $id_pessoa = $_POST["pessoa"];
    $quantidade = $_POST["quantidade"];

    if ($quantidade < 0) {
        $quantidade = 0;
    }

    include "conexao.php";

    $query = "SELECT * FROM carrinho WHERE id_produto = '$id_produto' and id_pessoa = '$id_pessoa'";
    
    $registros = mysqli_query($conexao, $query);
    
    
    if (mysqli_num_rows($registros) == 0) {

    $query = "INSERT INTO carrinho(id_produto, id_pessoa, quantidade) VALUES ('$id_produto', '$id_pessoa', '$quantidade')";
    mysqli_query($conexao, $query);

    $retorno["status"] = "s";
    $retorno["mensagem"] = "IF";
    
    $objetoJSON = json_encode($retorno);
    echo $objetoJSON;
}

    else {

        $query = "UPDATE carrinho
        SET quantidade = $quantidade
        WHERE carrinho.id_pessoa = '$id_pessoa' and id_produto = '$id_produto'";
        mysqli_query($conexao, $query);
        
        $retorno["status"] = "s";
        $retorno["mensagem"] = "Else";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }


?>
