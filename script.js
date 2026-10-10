const espaco = document.querySelector('.tudoimagem');
const brilho = document.querySelector('.brilho');

let mouseX = 0;
let mouseY = 0;

function atualizarBrilho() {
  const rect = espaco.getBoundingClientRect();
  brilho.style.setProperty('--x', `${mouseX - rect.left}px`);
  brilho.style.setProperty('--y', `${mouseY - rect.top}px`);
}

espaco.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  atualizarBrilho();
});

window.addEventListener('scroll', atualizarBrilho, { passive: true });



const skills = document.querySelectorAll('.hablit');

skills.forEach((skill) => {
  skill.addEventListener('click', () => {
    skill.classList.toggle('ativo');
  });
});



const formContato = document.getElementById('form-contato');
const modal = document.getElementById('modal-confirmar');

formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.showModal();
});

document.getElementById('modal-cancelar').addEventListener('click', () => {
  modal.close();
});

document.getElementById('modal-confirmar-btn').addEventListener('click', () => {
  modal.close();
  formContato.submit();
});

const modo = document.querySelector('.modo');
const iconeModo = document.getElementById('icone-modo');
const raiz = document.documentElement;

const iconeEscuro = 'icon-icons (1).png';                
const iconeClaro = 'if-weather-3-2682848_90785 (1).png';

function aplicarTema(claro) {
  raiz.classList.toggle('claro', claro);
  iconeModo.src = claro ? iconeClaro : iconeEscuro;
  localStorage.setItem('tema', claro ? 'claro' : 'escuro');
}


aplicarTema(localStorage.getItem('tema') === 'claro');

modo.addEventListener('click', () => {
  aplicarTema(!raiz.classList.contains('claro'));
});