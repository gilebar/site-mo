const links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');

    sections.forEach(sec => sec.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));

    document.getElementById(target).classList.add('active');
    link.classList.add('active');
  });
});

// Carrossel de imagens
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

const updateCarousel = () => {
  const imageWidth = carouselImages[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
};

const nextImage = () => {
  const totalImages = carouselImages.length;
  currentIndex = (currentIndex + 1) % totalImages; // vai até a última e volta pra 0
  updateCarousel();
};

const prevImage = () => {
  const totalImages = carouselImages.length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
};

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

setInterval(nextImage, 3000); // troca a cada 3 segundos
window.addEventListener('resize', updateCarousel);
// EFEITO DE FADE-IN NAS SEÇÕES AO ENTRAR
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.classList.add("fade-in");
  });
});

// CORAÇÕES FLUTUANTES
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 2 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 600);
function atualizarTempoJuntos() {
  const inicio = new Date("2022-12-25T00:00:00");
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  if (dias < 0) {
    meses--;
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
  }
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const diff = agora - inicio;
  const segundosTotais = Math.floor(diff / 1000);
  const horas = Math.floor((segundosTotais / 3600) % 24);
  const minutos = Math.floor((segundosTotais / 60) % 60);
  const segundos = Math.floor(segundosTotais % 60);
  const semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

  document.getElementById("tempo-juntos").innerHTML =
    `${anos} anos, ${meses} meses, ${semanas} semanas, ${dias} dias, ` +
    `${horas} horas, ${minutos} minutos e ${segundos} segundos 💞`;
}

setInterval(atualizarTempoJuntos, 1000);

const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});