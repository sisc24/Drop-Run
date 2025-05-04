function abrirDocumentoAleatorio() {
  // Lista de arquivos HTML disponíveis
  const documentos = [
    "codigo.html",
    "Decaimento.html",
    "direções.html",
    "emissão_alfa.html",
    "Vozes.html",
    "resposta.html",
    "vizinhos.html",
    "elementos.html",
    "isotopo.html",
    "eletrecidade.html",
    "velocidade.html",
    "focar.html",
    "conversao.html",
  ];

  // Seleciona um documento aleatório
  const aleatorio = documentos[Math.floor(Math.random() * documentos.length)];

  // Redireciona para o documento selecionado
  window.location.href = aleatorio;
}
