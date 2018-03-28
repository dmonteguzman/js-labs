//Point 3
let name = 'Diego';

//Point 4
const states = 50;

//Point 5
let sum = 5 + 4;

//Point 6
if ('Diego'.charCodeAt(0) === 'L'){
    alert('Back of the line');
} 
else {
    alert('Next');
}

//Point 8
function sayHello(){
    console.log('Hello World!');
}

//Point 9
sayHello();

//Point 10
function checkAge (name, age){
    if (age<21){
        alert("Sorry" + " " + name + ", you aren't too old to vies this page!")
    }
}

//Point 11
checkAge ("Charles", 21);
checkAge ("Abby", 27);
checkAge ("James" , 18);
checkAge ("John", 17);

//Point 12
let myVegArray = ["tomato", "onion", "carrot", "potato"];

//Point 13
for (i=0;i<myVegArray.length;i++){
    console.log(myVegArray[i]);
}

//Point 14
let nameArray = [
    {
        name: 'Diego',
        age: 29 
    },
    {
        name: 'Noelia',
        age: 28
    },
    {
        name: 'Sergio',
        age: 1
    },
    {
        name: 'Daniel',
        age: 20
    },
    {
        name: 'Sandra',
        age: 17
    },
]

//Point 15
for (j=0;j<nameArray.length;j++){
    checkAge(nameArray[j].name,nameArray[j].age);
}

//Point 16
function getLength(word){
    return word.length;
}

//Point 17
var getLong = getLength("Hello World!");

//Point 18
if (getLong % 2 === 0){
    console.log('The world is nice and even!');
}
else{
    console.log('The world is an odd place');
}

