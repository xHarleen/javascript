const numbers = [-23, -8, 0, 8, 71];

//reduce - suma elementow z tablicy 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

let sum1 = 0;
    numbers.forEach(element => {
        sum1 += element;
    });

console.log(sum1);
//filter - creates an array that contains all the elements that match the condition

const filtered = numbers.filter(value => value > 0);
console.log(filtered);


//map - creates an array with each modified element

const items = numbers.map(n => ({value: n+1}) );
console.log(items);

//chaining - calling multiple methods from one object to another without creating intermediate variables

const chainedItems = numbers
    .filter(value => value > 0)
    .map(n => ({value: n + 1}) )
    .filter(obj => obj.value > 8);

console.log(chainedItems);