const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

const comentarioInput = document.getElementById('comentario');
const enviarButton = document.getElementById('enviar');
const comentariosContainer = document.querySelector('.comentarios');
enviarButton.addEventListener('click', () => {
  const comentario = comentarioInput.value;
  const nuevoComentario = document.createElement('div');
  nuevoComentario.classList.add('comentario');
  nuevoComentario.textContent = comentario;
  comentariosContainer.appendChild(nuevoComentario);

  comentarioInput.value = '';
});