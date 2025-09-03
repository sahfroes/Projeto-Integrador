<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    // Email do responsável
    $para = "sarah69358@estudante.ifb.edu.br"; // coloque o email real
    $assunto = "Novo orçamento de $nome";

    // Corpo do email
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Mensagem:\n$mensagem";

    // Cabeçalhos
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar email
    if (mail($para, $assunto, $corpo, $headers)) {
        echo "Orçamento enviado com sucesso!";
    } else {
        echo "Erro ao enviar o orçamento. Tente novamente.";
    }
} else {
    echo "Acesso inválido.";
}
?>
