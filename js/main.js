function gerarPizza() {
	var containerPizzas = document.querySelector('#container-pizzas');
	//<li></li>
	var pizza = document.createElement('li'); 
	//<img src>
	var pizzaImg = document.createElement('img');
	//<img src="..">
	pizzaImg.setAttribute('src', 'https://source.unsplash.com/100x100/?pizza');
	pizzaImg.className = "borda-redonda";
	//<li><img></li>
	pizza.appendChild(pizzaImg); 
	containerPizzas.appendChild(pizza);
}

var botao = document.querySelector('button');

botao.onclick = function(){
	gerarPizza();
}