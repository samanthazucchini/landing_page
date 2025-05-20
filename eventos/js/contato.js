window.addEventListener("load", () => {
    console.log("Página de contato carregada!");
  });
  
  window.addEventListener("resize", () => {
    console.log("Janela redimensionada!");
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pedidoForm");
    const nome = document.getElementById("nome");
    const tipoFlor = document.getElementById("tipoFlor");
    const mensagem = document.getElementById("mensagem");
    const enviarBtn = document.getElementById("enviarBtn");
  
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f07cac";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#1e1e1e";
      });
    });
  
    enviarBtn.addEventListener("click", () => {
      alert("Botão clicado!");
    });
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Pedido enviado com sucesso!");
    });
  
    form.addEventListener("dblclick", () => {
      console.log("Formulário clicado duas vezes");
    });
  
    tipoFlor.addEventListener("change", () => {
      console.log("Flor selecionada:", tipoFlor.value);
    });
  
    nome.addEventListener("focus", () => {
      console.log("Campo nome em foco");
    });
  
    nome.addEventListener("blur", () => {
      console.log("Campo nome perdeu o foco");
    });
  
    nome.addEventListener("keydown", e => {
      console.log("Tecla pressionada:", e.key);
    });
  
    nome.addEventListener("keypress", () => {
      console.log("Digitando no campo nome");
    });
  
    nome.addEventListener("keyup", () => {
      console.log("Tecla solta");
    });
  
    mensagem.addEventListener("mouseover", () => {
      mensagem.style.backgroundColor = "#ffe0f0";
    });
  
    mensagem.addEventListener("mouseout", () => {
      mensagem.style.backgroundColor = "white";
    });
  });
  