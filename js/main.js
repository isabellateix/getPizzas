// função para gerar elementos no DOM

var totalPizzas = [];

function gerarPizza() {
	var contadorPizzas = document.querySelector('#total-pizzas');
	var containerPizzas = document.querySelector('#container-pizzas');
	//<li></li>
	var pizza = document.createElement('li'); 
	pizza.className = "list-inline-item";
	//<img src>
	var pizzaImg = document.createElement('img');
	//<img src="..">
	pizzaImg.setAttribute('src', 'imgs/pizza.png');
	pizzaImg.className = "borda-redonda";
	//<li><img></li>
	pizza.appendChild(pizzaImg); 
	containerPizzas.appendChild(pizza);

	//adicionando a pizza no array
	totalPizzas.push(pizza);

	var numeroPizzas = totalPizzas.length;
	contadorPizzas.innerHTML = numeroPizzas;
}
//coletando o botão
var botao = document.querySelector('button');

//gerando pizzas no evento onclick
botao.onclick = function(){
	gerarPizza();
}