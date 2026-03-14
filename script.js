// Post por ID
const btnBuscarPost = document.querySelector('#btnBuscarPost');
const receberID = document.querySelector('#receberID');
const resultadoBuscaPost = document.querySelector('#resultadoBuscaPost');
// Todos os Posts
const btnBuscarTodos = document.querySelector('#btnBuscarTodos');
const resultadoTodosPost = document.querySelector('#resultadoTodosPost');

// Eventos Botões
btnBuscarPost.addEventListener('click', () => { buscarPostID(receberID.value); });
btnBuscarTodos.addEventListener('click', () => { buscarTodos() })

// Função Buscar Post por ID
function buscarPostID(idPost) {
    console.log(idPost);
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then((resultado) => resultado.json())
        .then((dados) => {
            console.log(dados);
            resultadoBuscaPost.innerHTML = JSON.stringify(dados);
        })
        .catch(() => { resultadoBuscaPost.innerHTML = 'Post não encontrado!' });
}

// Função Buscar Todos Posts
function buscarTodos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultaado) => resultaado.json())
        .then((dados) => {
            console.log(dados)
            resultadoTodosPost.innerHTML = JSON.stringify(dados);
        });
}