/*
    * Async JavaScript*
    - Non-Blocking code : fast execution
    - browser takes it and hendles it outside single thread

    * Synchronous Programming*
    - One at a time in order
    - Blocking code : slow down the execution
    - Synchronous programming is blocking
    - JavaScript is a single threaded language (Statment by statment)
*/

const getTodos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    //request.open('get', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('get', 'todos.json');
    request.send();
}

getTodos((err, data) => {
    console.log('callback fired')
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})





