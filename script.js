const btnNo = document.getElementById("no");

// Se mueve cuando intentan tocarlo 😈
btnNo.addEventListener("mouseover", mover);
btnNo.addEventListener("touchstart", mover);

function mover() {
  const contenedor = document.querySelector(".botones");

  const x = Math.random() * (contenedor.offsetWidth - 100);
  const y = Math.random() * (contenedor.offsetHeight + 200);

  btnNo.style.left = x + "px";
  btnNo.style.top = y + "px";
}

// Botón SI cambia de pantalla 💖
const btnSi = document.getElementById("si");

btnSi.onclick = () => {
  document.getElementById("inicio").classList.remove("activa");
  document.getElementById("carta").classList.add("activa");

  document.getElementById("audio").play();
  crearCorazones();
};

// Abrir carta 💌
function abrirCarta() {
  document.getElementById("mensaje").style.display = "block";
}

// Corazones flotando 💖
function crearCorazones() {
  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "💖";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 3000);
  }, 300);
}