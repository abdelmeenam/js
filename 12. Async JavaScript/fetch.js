/* fetch api :
    - return a promise
    - the promise is rejected only when we get network error
    - the promise is resolved even if we get 404 error
    - when promise resolved we fire "then" funcion
*/

// fetch('todos/lolo.json').then(data => {
//     // it only retuen promise object
//     // console.log('resolved', data);
//     return data.json();}).then(data => {
//     // show data
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });

// async & await

const getTodos = async () => {

    const response = await fetch('todos/lolo.json');
    const data = await response.json();

    return data;
}
getTodos()
    .then(data => console.log('resolved:', data));

