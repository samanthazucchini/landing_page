window.addEventListener("load", function() {
  console.log("Página de contato carregada!");
});

window.addEventListener("resize", function() {
  console.log("Janela redimensionada!");
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("pedidoForm");
  const nome = document.getElementById("nome");
  const tipoFlor = document.getElementById("tipoFlor");
  const mensagem = document.getElementById("mensagem");
  const enviarBtn = document.getElementById("enviarBtn");

  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      link.style.color = "#f07cac";
    });
    link.addEventListener("mouseout", function() {
      link.style.color = "#1e1e1e";
    });
  });

  enviarBtn.addEventListener("click", function() {
    alert("Botão clicado!");
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pedido enviado com sucesso!");
  });

  form.addEventListener("dblclick", function() {
    console.log("Formulário clicado duas vezes");
  });

  tipoFlor.addEventListener("change", function() {
    console.log("Flor selecionada:", tipoFlor.value);
  });

  nome.addEventListener("focus", function() {
    console.log("Campo nome em foco");
  });

  nome.addEventListener("blur", function() {
    console.log("Campo nome perdeu o foco");
  });

  nome.addEventListener("keydown", function(e) {
    console.log("Tecla pressionada:", e.key);
  });

  nome.addEventListener("keypress", function() {
    console.log("Digitando no campo nome");
  });

  nome.addEventListener("keyup", function() {
    console.log("Tecla solta");
  });

  mensagem.addEventListener("mouseover", function() {
    mensagem.style.backgroundColor = "#ffe0f0";
  });

  mensagem.addEventListener("mouseout", function() {
    mensagem.style.backgroundColor = "white";
  });
});
