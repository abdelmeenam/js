/* Prmoise example : 
    - something takes sometime to do , reurn data or rejected
    - when we get a resolve, 'then()' method get fired and fires the call back function.
    - when we get a reject, 'catch()' method get fired and fires the call back function

*/

// Dummy Example
const getSomeThing = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        // resolve('some data');
        reject('some error');
    })
}
getSomeThing().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

const getTodos = (resource) => {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Error getting rersource');
            }
        });
        request.open('get', resource);
        request.send();
    })
}

// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved', data);
// }).catch(err => {
//     console.log('promise 1 rejected', err);
// });

// Chaining promises
getTodos('todos/luigi.json')
    .then(data => {
        console.log('promise 1 resolved', data);
        return getTodos('todos/todos.json');
    })
    .then(data => {
        console.log('promise 2 resolved', data);
        return getTodos('todos/lolo.json');
    })
    .then(data => {
        console.log('promise 3 resolved', data);
    })
    .catch(err => {
        console.log('promise rejected', err);
    });