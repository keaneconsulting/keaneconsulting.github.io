const hours = new Date().getHours() // get the current hour
//
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let greeting;
if (isMorning) {
    greeting = "Good Morning!";
} else if (isAfternoon) {
    greeting = "Good Afternoon!";
} else if (isEvening) {
    greeting = "Good Evening!";
}

const welcome = document.querySelector('#welcome');
welcome.textContent = `${greeting} Welcome to Evan's Cool Site!`;

// secret message
localStorage.setItem("It's a secret to everybody.", "Secret message: World of Warcraft reference?");
const secretMessage = localStorage.getItem("It's a secret to everybody.");
console.log(secretMessage);


const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
showImages()

document.getElementById('prev').addEventListener('click', () => {
    currentImage--
    showImages()
})

document.getElementById('next').addEventListener('click', () => {
    currentImage++
    showImages()
})
setInterval(() => {
    currentImage++
    showImages()
}, 5000)


const todoList = document.querySelector('.todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.querySelector('button[type="button"]');

const renderTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderTodos();
});

addTodoButton.addEventListener('click', () => {
    const todoText = newTodoInput.value.trim();

    if (todoText) {
        const todos = JSON.parse(localStorage.getItem('todo-list')) || [];
        todos.push({ text: todoText, completed: false });
        localStorage.setItem('todo-list', JSON.stringify(todos));

        newTodoInput.value = '';
        renderTodos();
    }
});




// pokemon
const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
};
const renderPokemon = (pokemon) => {
    const pokemon = document.getElementById('pokemon');
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    pokemon.appendChild(img);
};
const displayPokemon = async () => {
    const pokemon = await getRandomPokemon();
    renderPokemon(pokemon);
};
document.addEventListener('DOMContentLoaded', displayPokemon);
