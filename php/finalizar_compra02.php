<?php
    
    include "conexao.php";

    $tipo_pagamento = $_POST["tipoPagamento"];
    $id_pessoa = $_POST["id_pessoa"];
    $pix = $_POST["pix_db"];
    $num_card = $_POST["num_card_db"];
    $nome = $_POST["nome_db"];
    $validade = $_POST["validade_db"];
    $digito = $_POST["digito_db"];
    $parcelas = $_POST["parcelas_db"];
    $hoje = date('Y/m/d');
    


    $query = "SELECT produto.preco AS 'preco', quantidade FROM carrinho 
    JOIN produto ON produto.id_produto = carrinho.id_produto";


    $registros = mysqli_query($conexao, $query);    

    $i = 0;    

    while($registro = mysqli_fetch_assoc($registros)){

        $resposta[$i] = $registro["preco"] * $registro["quantidade"];
        $i++;}

    $valor_total = array_sum($resposta);

    if ($tipo_pagamento[0] == "P") {
        $query2 = "INSERT INTO finalizar_compra (tipo_pagamento, id_pessoa, valor_total, data_compra, pix, num_card, nome_completo, validade, digito, parcelas) VALUES ('$tipo_pagamento[0]', '$id_pessoa', $valor_total, '$hoje', '$pix', NULL, NULL, NULL, NULL, NULL)";
    }
    elseif ($tipo_pagamento[0] == "A") {
        $query2 = "INSERT INTO finalizar_compra (tipo_pagamento, id_pessoa, valor_total, data_compra, pix, num_card, nome_completo, validade, digito, parcelas) VALUES ('$tipo_pagamento[0]', '$id_pessoa', $valor_total, '$hoje', NULL, '$num_card', '$nome', '$validade', '$digito', NULL)";
    }
    elseif ($tipo_pagamento[0] == "V") {
        $query2 = "INSERT INTO finalizar_compra (tipo_pagamento, id_pessoa, valor_total, data_compra, pix, num_card, nome_completo, validade, digito, parcelas) VALUES ('$tipo_pagamento[0]', '$id_pessoa', $valor_total, '$hoje', NULL, '$num_card', '$nome', '$validade', '$digito', '$parcelas')";
    }


    mysqli_query($conexao, $query2);
    
    $query3 = "DELETE FROM carrinho WHERE id_pessoa = '$id_pessoa'";

    mysqli_query($conexao, $query3);
?>