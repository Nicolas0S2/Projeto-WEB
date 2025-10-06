<?php

    $id_pessoa = $_POST["id_pessoa"];

    include "conexao.php";



    $query = "SELECT nome, preco, descricao, quantidade AS 'contagem', carrinho.id_produto AS 'id_produto' FROM carrinho
    JOIN produto ON produto.id_produto = carrinho.id_produto
    WHERE id_pessoa = '$id_pessoa'
	ORDER BY carrinho.id_produto;";

    $query2 = "DELETE FROM carrinho WHERE quantidade = '0' AND id_pessoa >= 1";
    
    mysqli_query($conexao, $query2);
    
    $registros = mysqli_query($conexao, $query);

    if (mysqli_num_rows($registros) > 0) {
    $i = 0;
    
    while($registro = mysqli_fetch_assoc($registros)){

        $resposta[$i]["nome"] = $registro["nome"];
        $resposta[$i]["preco"] = $registro["preco"];
        $resposta[$i]["descricao"] = $registro["descricao"];
        $resposta[$i]["id_produto"] = $registro["id_produto"];
        $resposta[$i]["contagem"] = $registro["contagem"];
        $i++;
    }
    $objetoJSON = json_encode($resposta);
    echo $objetoJSON;

}

    else {
        $retorno["status"] = "n";
        $retorno["mensagem"] = "Ainda não há produtos";
        
        $objetoJSON = json_encode($retorno);
        echo $objetoJSON;
    }

?>