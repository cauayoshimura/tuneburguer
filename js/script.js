//menu
let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

function adicionarItem(botao) {
    var produto = botao.parentNode;
    var nomeProduto = produto.dataset.name;
    var precoProduto = parseFloat(produto.dataset.price);
    var itensCarrinho = document.getElementById('carrinho');
    var elementoTotal = document.getElementById('total');

    // Cria um novo item para o carrinho
    var novoItem = document.createElement('div');
    novoItem.classList.add('item-carrinho');
    novoItem.innerHTML = '<span>' + nomeProduto + ': </span>' + '<span>R$' + precoProduto.toFixed(2) + '</span>' +
        '<button onclick="removerItem(this)">Remover</button>';

    itensCarrinho.appendChild(novoItem); // Adiciona o novo item ao carrinho

    // Recalcula o total
    var itens = document.querySelectorAll('.item-carrinho span:nth-child(2)');
    var total = 0;
    for (var i = 0; i < itens.length; i++) {
        total += parseFloat(itens[i].textContent.slice(2)); // Remove o "R$" e converte para número
    }
    elementoTotal.textContent = "Total: R$" + total.toFixed(2);
}
function removerItem(botao) {
    var item = botao.parentNode;
    item.parentNode.removeChild(item); // Remove o item do DOM
    
    // Recalcula o total
    var elementoTotal = document.getElementById('total');
    var itens = document.querySelectorAll('.item-carrinho span:nth-child(2)');
    var total = 0;
    for (var i = 0; i < itens.length; i++) {
        total += parseFloat(itens[i].textContent.slice(2)); // Remove o "R$" e converte para número
    }
    elementoTotal.textContent = "Total: R$" + total.toFixed(2);
}

function mostrarEndereco() {
    const endereco = document.getElementById('abrir');
    endereco.style.display = 'block'; // Exibe o endereço
}

function confirmarPedido() {
        var x;
        var r= false 
        r = confirm("Você deseja confirmar o pedido ?");
        if (r==true){
            alert("Pedido Confirmado com Sucesso!")
            if (r==true){
                const endereco = document.getElementById('abrir');
                endereco.style.display = 'none'; 
            }
        }
        else{
            alert("Pedido Cancelado")
                if (r==false){
                    {
                    const endereco = document.getElementById('abrir');
                    endereco.style.display = 'none'; 
                }
            }
        document.getElementById("demo").innerHTML=x;
        }
}

var morelinks = document.querySelectorAll(".seila > .texto");
for (var i = 0, j = morelinks.length; i < j; i++) {
     morelinks[0].onclick = function () {
          var container = this.parentNode.querySelector(".container");
          
          container.classList.toggle("partial");
          this.classList.toggle("texto");
     };
}