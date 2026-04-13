const botao = document.getElementById("btn");
botao.addEventListener("click", function() {
    const entrada = document.getElementById("input");
    if(entrada.value === "")
        return;
    const lista = document.getElementById("lista");
    const listItem = document.createElement("li")
    listItem.textContent = entrada.value;
    lista.appendChild(listItem);
    listItem.addEventListener("click", function() {
        lista.removeChild(listItem);
    })
})

