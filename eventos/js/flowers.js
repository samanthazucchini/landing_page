window.addEventListener("DOMContentLoaded", function() {

  const links = document.querySelectorAll(".nav a");
  links.forEach(function(link) {
    link.addEventListener("mouseover", function() {
      link.style.color = "#f07cac";
    });

    link.addEventListener("mouseout", function() {
      link.style.color = "#1e1e1e";
    });
  });

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
      button.style.backgroundColor = "#f07cac";
      button.style.color = "#fff";
    });

    button.addEventListener("mouseout", function() {
      button.style.backgroundColor = "#fff";
      button.style.color = "#000";
    });

    button.addEventListener("click", function() {
      const destino = button.getAttribute("data-redirect");
      if (destino) {
        window.location.href = destino;
      }
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

  caixaTexto.addEventListener("keydown", function(event) {
    event.preventDefault();
    caixaTexto.value = fraseAleatoria();
  });

  caixaTexto.addEventListener("keypress", function() {
    caixaTexto.style.backgroundColor = "#ffe6f0";
  });

  caixaTexto.addEventListener("keyup", function() {
    caixaTexto.style.backgroundColor = "#d87aa6";
  });

});
