// get all elmentd
const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
//     console.log(para);
// });
// console.log(paras[0]);


// get specifi element by css selector - out = node list
const errors = document.querySelectorAll('.error');
// errors.forEach((error) => {
//     console.log(error);
// });

// get elemment by id
const title = document.getElementById('page-title')

// get element by class name  - out = html collection
const errors2 = document.getElementsByClassName('error');
//console.log(errors2);
// console.log(errors2[0]);

// get elements bu their tag name
const paras2 = document.getElementsByTagName('p');
//console.log(paras2);
console.log(paras2[0]);