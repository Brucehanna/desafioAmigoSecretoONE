
let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nomeAmigo = input.value.trim();

  if (nomeAmigo) {
    amigos.push(nomeAmigo);

    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");
    novoItem.textContent = nomeAmigo;

    lista.appendChild(novoItem);

    input.value = "";
  } else {
    alert("Por favor, insira um nome!");
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert(`A lista está vazia. Adicione nomes antes de sortear`);
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  amigos.splice(indiceAleatorio, 1);

  let resultadoDiv = document.getElementById("resultado");

  if (amigos.length >= 1) {
    resultadoDiv.textContent = `Amigo sorteado: ${amigoSorteado}`;
  } else {
    resultadoDiv.textContent = `Amigo sorteado: ${amigoSorteado}. Não possui mais nomes na Lista.`;
  }


  atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    
    listaElement.innerHTML = '';

    amigos.forEach(amigo => {
        let novoItem = document.createElement('li');
        novoItem.textContent = amigo;
        listaElement.appendChild(novoItem);
    })
}
