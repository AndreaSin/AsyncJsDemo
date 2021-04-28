const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];

// i setTimeout sono per simulare i tempi di risposta di un server

/*
function getPost() {
    setTimeout(()=> {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        console.log('getPost');
        document.getElementById('post').innerHTML = output;
    },1000);
}

function createPost(post) {
    setTimeout(() => {
        console.log('createPost');
        posts.push(post);
    },2000);
}

createPost({title: 'post 3', body: 'this is post 3'});
getPost();
*/

// create post è troppo lenta ed il terzo post non viene caricato
// uno dei modi per risolvere questo tipo di problemi è usare una callback

function getPost() {
    setTimeout(()=> {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        console.log('getPost');
        document.getElementById('post').innerHTML = output;
    },1000);
}

// prevedo una funzione come parametro da eseguire alla fine
function createPost(post, callback) {
    setTimeout(() => {
        console.log('createPost');
        posts.push(post);
        callback();
    },2000);
}

// passo la funzione che deve essere eseguita dopo come parametro
createPost({title: 'post 3', body: 'this is post 3'}, getPost);

