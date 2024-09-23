document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const nota = document.getElementById('nota').value;

    if (nome === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (nota === "") {
        alert("Por favor, selecione uma nota de avaliação.");
        return;
    }

    // Se tudo estiver correto
    alert("Formulário enviado com sucesso!");
});
