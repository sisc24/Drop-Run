function abrirDocumentoAleatorio() {
  // Lista de arquivos HTML disponíveis
  const documentos = ["enigmas.html", "Contactos.html", "Ajuda.html"];

  // Seleciona um documento aleatório
  const aleatorio = documentos[Math.floor(Math.random() * documentos.length)];

  // Redireciona para o documento selecionado
  window.location.href = aleatorio;
}
