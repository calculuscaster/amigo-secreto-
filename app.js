//Variables iniciales
let listaDeAmigos = [];
//Agrega un nombre de amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Por favor, escribe un nombre");
    } else {
        listaDeAmigos.push(nombreAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
//Actualiza la lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}
//Sortea el nombre del amigo amigo
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, escribe un nombre.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `El nombre de su amigo secreto es: ${nombreSorteado}`;
}  
