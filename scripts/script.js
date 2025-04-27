const form = document.querySelector("form");
const product = document.getElementById("product");
const itemList = document.querySelector(".item-list");
const btn = document.querySelector(".btn-delete");
const item = document.querySelectorAll(".item");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let itemValue = product.value; // Captura o valor do input
  adiciona(itemValue);
  product.value = ""; // Limpa o input depois de adicionar
});

function adiciona(productName) {
  // Cria a estrutura de um novo item da lista
  const li = document.createElement("li");
  li.className = "item flex";

  li.innerHTML = `
    <div class="flex gap-1 margin-left-12">
      <input type="checkbox" />
      <p>${productName}</p>
    </div>

    <button onclick="deletCompra(this)" class="btn-delete">
      <img class="trash" src="assets/icons/trash.svg" alt="ícone de lixeira" />
    </button>
  `;
  // Adiciona o novo li dentro da UL
  itemList.appendChild(li);
}


function deletCompra(li) {
  // O this remete ao própio elemento que chamou a função
  // O parentElement é o elemento pai do button, ou seja, a li
  // O parentElement do button é a li, então removemos a li
  li.parentElement.remove();
  error.classList.remove("close"); // Adiciona a classe 'close' no erro (esconde o erro)
  // Adiciona a classe 'close' no erro depois de 2 segundos
  setTimeout(() => {
    error.classList.add("close"); // Remove a classe 'close' do erro (mostra o erro)
  }, 2000);
}


