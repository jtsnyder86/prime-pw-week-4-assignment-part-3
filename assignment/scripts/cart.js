console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem (item) {
    console.log('Item added', item);
    basket.push(item);
    return true
}
addItem('Bignet');
addItem('Cookie Dough');
addItem('Gas station sushi');
addItem('Milk');
addItem('Healthy stuff');
console.log(`Basket is ${basket}`);
console.log('Adding bingets', addItem('bingets'));
console.log('Adding cookie dough', addItem('cookie dough'));
console.log('Adding gas station sushi', addItem('gas station sushi'));
console.log('Adding milk', addItem('milk'));
console.log('Adding healthy stuff', addItem('Healthy stuff'));

function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}

listItems();

function empty() {
    basket = [];
    //basket.pop(item)
}

console.log(`Basket is now, ${basket}`);