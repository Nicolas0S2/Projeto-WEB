<?php

    include "conexao.php";

    $id_pessoa = $_POST["quantidades"];

    $query = "SELECT id_produto, quantidade FROM carrinho WHERE id_pessoa = '$id_pessoa' AND quantidade > 0";
    $registros = mysqli_query($conexao, $query);

    $i = 0;

    if (mysqli_num_rows($registros) == 0) {

        $resposta[0]["quantidade"] = 0;
        $resposta[0]["status"] = "n";

        $objetoJSON = json_encode($resposta);
        echo $objetoJSON;
    }
    else {

        while($registro = mysqli_fetch_assoc($registros)){

            $resposta[$i]["id_produto"] = $registro["id_produto"];
            $resposta[$i]["quantidade"] = $registro["quantidade"];
            $i++;
        }
            $objetoJSON = json_encode($resposta);
            echo $objetoJSON;
    }
    


?>
