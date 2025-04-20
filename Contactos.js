function copiarEmail() {
        const email = document.getElementById("email").innerText;
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copiado para a área de transferência!");
        }).catch(err => {
            console.error("Erro ao copiar o email: ", err);
        });
    }