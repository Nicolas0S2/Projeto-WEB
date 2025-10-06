<?php

    $email = $_POST["id_email"];


    include "conexao.php";

    $query = "SELECT id FROM ecommerce.pessoa WHERE email = '$email'";

    $registros = mysqli_query($conexao, $query);
    
    $registro = mysqli_fetch_assoc($registros);

    $resposta[0]["id"] = $registro["id"];

    $objetoJSON = json_encode($resposta);
    echo $objetoJSON;

?>

