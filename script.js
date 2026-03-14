const btnBuscarPost = document.querySelector('#btnBuscarPost');
const receberID = document.querySelector('#receberID');
const resultadoBuscaPost = document.querySelector('#resultadoBuscaPost');

btnBuscarPost.addEventListener('click', () => { buscarPostID(receberID.value); });

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

