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
  // Aquí deberías implementar la lógica para enviar el comentario a un servidor
  // y actualizar la interfaz de usuario con el nuevo comentario

  // Ejemplo de cómo agregar un comentario a la interfaz (sin enviar al servidor):
  const nuevoComentario = document.createElement('div');
  nuevoComentario.classList.add('comentario');
  nuevoComentario.textContent = comentario;
  comentariosContainer.appendChild(nuevoComentario);

  comentarioInput.value = '';
});