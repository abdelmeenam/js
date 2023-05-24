// Events
const button = document.querySelector('button');


// show data of dom
const itmes = document.querySelectorAll('li');
// itmes.forEach(item => {
//     item.addEventListener('click', e => {
//         //console.log(e);
//         //console.log(e.target);
//         //console.log(item);
//         e.target.style.textDecoration = 'line-through';
//     });
// });


// Remove from DOM
itmes.forEach(item => {
    item.addEventListener('click', e => {
        item.remove();
    });
});

// Add data to DOM
const ul = document.querySelector('ul');
button.addEventListener('click', () => {
    //ul.innerHTML += '<li>something new to do</li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //ul.append(li);
    ul.prepend(li);
});
