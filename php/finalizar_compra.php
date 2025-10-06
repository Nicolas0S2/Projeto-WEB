<?php

    include "conexao.php";

    $id_pessoa = $_POST["pessoa"];

    $query = "SELECT produto.preco AS 'preco', quantidade FROM carrinho 
    JOIN produto ON produto.id_produto = carrinho.id_produto";

    $registros = mysqli_query($conexao, $query);    

    $i = 0;    

    while($registro = mysqli_fetch_assoc($registros)){

        $resposta[$i] = $registro["preco"] * $registro["quantidade"];
        $i++;}

        $response = array_sum($resposta);
        
        $objetoJSON = json_encode($response);
        echo $objetoJSON;

?>
