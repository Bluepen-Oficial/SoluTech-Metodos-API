// Post por ID
const btnBuscarPost = document.querySelector('#btnBuscarPost');
const receberID = document.querySelector('#receberID');
const resultadoBuscaPost = document.querySelector('#resultadoBuscaPost');
// Todos os Posts
const btnBuscarTodos = document.querySelector('#btnBuscarTodos');
const resultadoTodosPost = document.querySelector('#resultadoTodosPost');
// Criar Novo Post
const novoTitulo = document.querySelector('#novoTitulo');
const novoConteudo = document.querySelector('#novoConteudo');
const btnNovoPost = document.querySelector('#btnNovoPost');
// Atualizar Post

// Eventos Botões
btnBuscarPost.addEventListener('click', () => { buscarPostID(receberID.value); });
btnBuscarTodos.addEventListener('click', () => { buscarTodos() });
btnNovoPost.addEventListener('click', () => { criarNovoPost(novoTitulo, novoConteudo) })

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

// Criar Novo Post
function criarNovoPost(titulo, conteudo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titulo ,
            body: conteudo,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}