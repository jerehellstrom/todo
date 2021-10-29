	//tämä lisää sen mitä kirjoitat to-do listaan, eli on lisää napin funktio
	function addItem() {
		var a = document.getElementById('list');
		var todo = document.getElementById('todo');
		var li = document.createElement('li');
		li.setAttribute('id', todo.value);
		li.appendChild(document.createTextNode(todo.value));
		a.appendChild(li);
		
	}
	//tämä poistaa sen mitä kirjoitat to-do listaan, eli poista napin funktio. 
	//HUOM! myös poista nappi vaati että listan esine on kirjoitettuna
	function removeItem() {
		var a = document.getElementById('list');
		var todo = document.getElementById('todo');
		var item = document.getElementById(todo.value);
		a.removeChild(item);
	}
