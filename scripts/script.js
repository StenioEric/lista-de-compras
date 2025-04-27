const form = document.querySelector("form");
const product = document.getElementById("product");
const itemList = document.querySelector(".item-list"); // Pega a UL

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let itemValue = product.value // Captura o valor do input
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
      <p class="item">${productName}</p>
    </div>
    <img class="trash" src="assets/icons/trash.svg" alt="ícone de lixeira" />
  `;

  // Adiciona o novo li dentro da UL
  itemList.appendChild(li);
}
