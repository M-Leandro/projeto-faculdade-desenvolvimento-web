// Espera todo o HTML carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Pega o formulário pelo ID no HTML
    const form = document.getElementById("form-contato");

    // Pega o momento em que o botão de submit for clicado
    form.addEventListener("submit", function(event) {
        
        // Evita que a página recarregue
        event.preventDefault(); 

        // Captura os valores que o usuário digitou e remove espaços em branco nas pontas
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // 1. Validação de campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
            return; // Para a execução do código aqui se der erro
        }

        // 2. Validação simples do formato de e-mail
        if (!email.includes("@") || !email.includes(".")) {
            alert("⚠️ Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // 3. Simulação do envio com sucesso
        alert(`✅ Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

        // 4. Limpa os campos do formulário para o usuário
        form.reset();
    });

});