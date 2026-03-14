// Post por ID
const btnBuscarPost = document.querySelector('#btnBuscarPost');
const receberID = document.querySelector('#receberID');
// Todos os Posts
const btnBuscarTodos = document.querySelector('#btnBuscarTodos');
// Criar Novo Post
const novoTitulo = document.querySelector('#novoTitulo');
const novoConteudo = document.querySelector('#novoConteudo');
const btnNovoPost = document.querySelector('#btnNovoPost');
// Atualizar Post

// Resultadosresultados
const resultados = document.querySelector('#resultados');
// Eventos Botões
btnBuscarPost.addEventListener('click', () => { buscarPostID(receberID.value); });
btnBuscarTodos.addEventListener('click', () => { buscarTodos() });
btnNovoPost.addEventListener('click', () => { criarNovoPost(novoTitulo.value, novoConteudo.value); console.log('a',novoTitulo.value, novoConteudo.value);})

// Função Buscar Post por ID
function buscarPostID(idPost) {
    console.log(idPost);
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then((resultado) => resultado.json())
        .then((dados) => {
            console.log(dados);
            resultados.innerHTML = JSON.stringify(dados);
        })
        .catch(() => { resultados.innerHTML = 'Post não encontrado!' });
}

// Função Buscar Todos Posts
function buscarTodos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultaado) => resultaado.json())
        .then((dados) => {
            console.log(dados)
            resultados.innerHTML = JSON.stringify(dados);
        });
}

// Criar Novo Post
function criarNovoPost(titulo, conteudo) {
    console.log(titulo, conteudo);
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