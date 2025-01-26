// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
const amigos = [];

//  Agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    // Validar campo que no esté vacío
    if (nombre === '') {
        alert( 'Ingrese un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista 
    amigos.push(nombre);

    // Crear un nuevo elemento de la lista y agregarlo al DOM
    const li = document.createElement('li');
    li.textContent = nombre;
    li.classList.add('name-item'); 
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    input.value = '';
    
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, agregue al menos un nombre.');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<p> 🎁 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎁 </p>`;
}