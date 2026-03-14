// Post por ID
const btnBuscarPost = document.querySelector('#btnBuscarPost');
const receberID = document.querySelector('#receberID');
// Todos os Posts
const btnBuscarTodos = document.querySelector('#btnBuscarTodos');
// Criar Novo Post
const novoTitulo = document.querySelector('#novoTitulo');
const novoConteudo = document.querySelector('#novoConteudo');
const btnNovoPost = document.querySelector('#btnNovoPost');
let novoID;
let ID;
// Atualizar Post
const btnAtualizar = document.querySelector('#btnAtualizar');
const atualizarID = document.querySelector('#atualizarID');
const atualizarTitulo = document.querySelector('#atualizarTitulo');
// Deletar Post
const btnDeletar = document.querySelector('#btnDeletar');
const deletarID = document.querySelector('#deletarID');
// Resultadosresultados
const resultados = document.querySelector('#resultados');
const mostrarResultados = document.querySelector('#mostrarResultados');

// Eventos Botões
btnBuscarPost.addEventListener('click', () => { buscarPostID(receberID.value); });
btnBuscarTodos.addEventListener('click', () => { buscarTodos() });
btnNovoPost.addEventListener('click', () => { criarNovoPost(novoTitulo.value, novoConteudo.value); console.log('a', novoTitulo.value, novoConteudo.value); });
btnAtualizar.addEventListener('click', () => { atualizarPost(atualizarID.value, atualizarTitulo.value); });
btnDeletar.addEventListener('click', () => { deletarPost(deletarID.value); });

// Função Buscar Post por ID
function buscarPostID(idPost) {
    console.log(idPost);
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then((resultado) => resultado.json())
        .then((dados) => {
            console.log(dados);
            mostrarResultados.classList.add('mostrar');
            resultados.innerHTML = `
                <h4><b>ID ${dados.id}</b></h4> 
                <p><b>Título:</b> ${dados.title}.</p>
                <p><b>Conteúdo:</b> ${dados.body}.</p>
                `;
        })
        .catch(() => { resultados.innerHTML = 'Post não encontrado!' });
    receberID.value = '';
}

// Função Buscar Todos Posts
function buscarTodos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultaado) => resultaado.json())
        .then((dados) => {
            console.log(dados)
            mostrarResultados.classList.add('mostrar');
            resultados.innerHTML = dados.map(dados => `
                <h4><b>ID ${dados.id}</b></h4> 
                <p><b>Título:</b> ${dados.title}.</p>
                <p><b>Conteúdo:</b> ${dados.body}.</p>
                `).join('');
        });
}

// Buscar ID
function buscarIdAtual() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultaado) => resultaado.json())
        .then((dados) => {
            let ultimo = dados.length;
            novoID = parseInt(dados[ultimo - 1].id) + 1;
            console.log("novo ID: ", novoID);
        });
    return novoID;
}

// Criar Novo Post
function criarNovoPost(titulo, conteudo) {
    console.log("Entrou", titulo, conteudo);
    console.log(novoID);
    if (titulo == '' || conteudo == '') {
        alert("Informe um título ou conteúdo válido!")
        novoConteudo.value = '';
        novoTitulo.value = '';
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                id: novoID,
                title: titulo,
                body: conteudo,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((resultado) => resultado.json())
            .then((dados) => {
                console.log(dados)
                mostrarResultados.classList.add('mostrar');
                alert("Novo usuário adicionado com sucesso!");
                resultados.innerHTML = `
                    <h4><b>ID ${dados.id}</b></h4> 
                   <p><b>Título:</b> ${dados.title}.</p>
                   <p><b>Conteúdo:</b> ${dados.body}.</p>
                `;
            });
        novoID += 1;
        novoConteudo.value = '';
        novoTitulo.value = '';
    }
}

buscarIdAtual();

// Atualizar Post
function atualizarPost(idPost, novoTitulo) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: novoTitulo,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((resultado) => resultado.json())
        .then((dados) => {
            console.log(dados);
            mostrarResultados.classList.add('mostrar');
            resultados.innerHTML = `
                <h4><b>ID ${dados.id}</b></h4> 
                <p><b>Título:</b> ${dados.title}.</p>
                <p><b>Conteúdo:</b> ${dados.body}.</p>
                `;
            alert("Post atualizado com sucesso!");
        });
}

// Deletar Post
function deletarPost(idPost) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {
        method: 'DELETE',
    })
        .then((resultado) => resultado.json())
        .then((dados) => {
            console.log(dados[idPost]);
            alert("Post deletado com sucesso!");
            deletarID.value = '';
        });
}