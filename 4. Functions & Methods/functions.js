// function declaration
function greet() {
    console.log('Hello there');
}
//greet();
// arrow function


// function expression : store the function inside a variable
const speak = function (name = 'Abdelmonem', time = 'Morning') {
    console.log(`Good ${time} ${name}!`);

};
//speak('mario', 'mornning');
//speak();


// returning values
const calcArea = function (radius) {
    return 3.14 * radius ** 2;
}
//const area = calcArea(5);
//console.log(area);


// arrow function
const calculateArea = (radius) => {
    return 3.14 * radius ** 2;
};
// const area = calculateArea(4);
// console.log(area);


// methods : use dot notation , it's assocaited with object or data type
// name = 'abdelmonem';
// let res = name.toUpperCase();
// console.log(res);

//--------------------------callbacks & for each-------------------
const myFunction = (funcAsPara) => {
    let value = 50;
    funcAsPara(value);
}
myFunction(
    (value) => {
        //console.log(value);
    }
);

let people = ['abdelmonem', 'ahmed', 'mohamed', 'ali', 'mohamed'];
// people.forEach((person, index) => {
//     console.log(person, index);
// })
const showPersons = (person, index) => {
    console.log(`Hello , ${index} - ${person}`);
}
// people.forEach(showPersons);


const ul = document.querySelector('.people');
console.log(ul);
let html = ``;
people.forEach((person) => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
})

ul.innerHTML = html;