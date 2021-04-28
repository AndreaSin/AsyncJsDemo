const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];
/*
// metodo per risolvere i problemi di timing con le Promises

function getPost() {
    setTimeout(()=> {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        console.log('getPost');
        document.getElementById('post').innerHTML = output;
    }, 1000);
}

// faccio tornare una promise alla funzione

function createPost(post) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error) {
                resolve();
            } else {
                reject('Error!');
            }
        }, 2000);
    });
}

// visto che torna una promise, posso concatenare la chiamata con .then()
// dove mettero la funzione da chiamare solo dopo
createPost({title: 'post 3', body: 'this is post 3'})
    .then(getPost)
    .catch(err => console.log(err));

*/

// FETCH torna una promise
/*
console.log('promise');
const promise= fetch('https://jsonplaceholder.typicode.com/todos/1');

const title = 
promise
    .then((response) => response.json())
    .then((post) => {
        return post;
});

// per fare il console log, devo passare da un altra promise o fa il console log prima del tempo
//  You can use the return value from the Promise object ONLY in a async function.
const printTitle = () => {
    title.then((a) => {
        console.log(a);
    });
};

printTitle();
// o usare un async await
const printTitle2 = async () => {
    const a = await title;
    console.log(a);
};
printTitle2();
*/
// more info
//https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck





//ESEMPI ASYNC AWAIT
// si usano per gestire i ritorni di promise
// await puo essre usato solo dentro una funzione async

function getPost() {
    setTimeout(()=> {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        console.log('getPost');
        document.getElementById('post').innerHTML = output;
    }, 1000);
}

// faccio tornare una promise alla funzione

function createPost(post) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error) {
                resolve();
            } else {
                reject('Error!');
            }
        }, 2000);
    });
}

async function init() {
    await createPost({title: 'post 3', body: 'this is post 3'});
    //aspetta che create post sia finita prima di chioamare getPost
    getPost();
}

init();



///// ASYNC AWAIT CON FETCH

async function fetchUsers() {
    // fetch torna una promise, quindi posso usare await
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

fetchUsers();