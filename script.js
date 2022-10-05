// # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.

const adicionaItem = () => {
    const containerItens = document.getElementById("container")
    const novoItem = document.createElement("article")
    novoItem.innerHTML = "ITEM ADD!"    

    // //# Exercício 2
// // Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item
    containerItens.insertAdjacentElement("beforeend", novoItem)
    novoItem.setAttribute("onclick", "removeItem(event)")
    novoItem.classList.add("item") //adicionar o css para os novos itens da minha class

    //Mudar de cor a cada Click
    novoItem.setAttribute("class", "item")
    novoItem.style.backgroundColor = "rgb(" + (Math.random() * 122) + "," + (Math.random() * 215) + "," + (Math.random() * 255)
    novoItem.style.color = "white"
}

//Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.
// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

function removeItem(event) {   
    event.target.remove()
    //ou 
    // novoItem = document.querySelector(".item")
    // novoItem.classList.remove("item")
}
