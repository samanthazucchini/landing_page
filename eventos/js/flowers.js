window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav a");
    const buttons = document.querySelectorAll(".btn");
  
    links.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f07cac";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.color = "#1e1e1e";
      });
    });
  
    buttons.forEach(button => {
      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#f07cac";
        button.style.color = "#fff";
      });
  
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
      });
  
      button.addEventListener("click", () => {
        const destino = button.getAttribute("data-redirect");
        if (destino) window.location.href = destino;
      });
    });
  
    console.log("Página index carregada!");
  
    const caixaTexto = document.getElementById("caixaTexto");
  
    const frases = [
      "Flores são sorrisos da natureza 🌸",
      "Espalhe amor como pétalas ao vento 🌷",
      "Onde há flores, há esperança 🌼",
      "Que seu dia floresça com alegria 🌺",
      "A beleza das flores alegra qualquer coração 🌹",
      "Flores são pequenos milagres da terra 🌻"
    ];
  
    function fraseAleatoria() {
      const indice = Math.floor(Math.random() * frases.length);
      return frases[indice];
    }
  
    caixaTexto.addEventListener("keydown", (event) => {
      event.preventDefault();
      caixaTexto.value = fraseAleatoria(); 
    });
  
    caixaTexto.addEventListener("keypress", () => {
      caixaTexto.style.backgroundColor = "#ffe6f0";
    });
  
    caixaTexto.addEventListener("keyup", () => {
      caixaTexto.style.backgroundColor = "#d87aa6";
    });
  });
  