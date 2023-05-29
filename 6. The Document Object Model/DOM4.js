const itmes = document.querySelectorAll('li');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


// Remove  & ADD from DOM
// itmes.forEach(item => {
//     item.addEventListener('click', e => {
//         //console.log(e);
//         //console.log(e.target);
//         //console.log(item);
//         //e.target.style.textDecoration = 'line-through';
//         //e.target.remove();
//         //e.stopPropagation();
//         item.remove();
//     });
// });
button.addEventListener('click', () => {
    //ul.innerHTML += '<li>something new to do</li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});


// Event bubling
ul.addEventListener('click', e => {
    //console.log('even in UL')
    //console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

