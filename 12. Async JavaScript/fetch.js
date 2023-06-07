/* fetch api :
    - return a promise 
    - the promise is rejected only when we get netwoek error
*/

fetch('todos/lolo.json').then(data => {
    console.log('resolved', data);

    // it only retuen promise object
    return data.json();
}).then(data => {
    // show data
    console.log(data);
})
    .catch(err => {
        console.log('rejected', err);
    });

