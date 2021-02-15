let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
    }
    else if(estilos.contains('aumentar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        valor.style.color = '#fff';
      }
      if(contador < 0) {
        valor.style.color = '#ba215a';
      }
  })
})