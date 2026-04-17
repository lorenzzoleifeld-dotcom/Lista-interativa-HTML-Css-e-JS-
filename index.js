const botao = document.querySelector(".btn");
const entrada = document.getElementById("input");
const lista = document.getElementById("lista");
botao.addEventListener("click", () => {
    if(entrada.value === "")
        return;
    const listItem = document.createElement("li");
    listItem.textContent = entrada.value;
    lista.appendChild(listItem);
    listItem.addEventListener("click", () => {
        if(listItem.classList.contains("estilo")) {
            lista.removeChild(listItem);
        } else {
            listItem.classList.add("estilo");
        }
    })
})
