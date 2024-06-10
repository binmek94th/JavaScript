const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};
//const another = {};

// for (let key in circle){
//     another[key] = [circle.key];
// }

const another = { ...circle}

const message = 'hi';

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

function createAddress(street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    }
}
function Address(a, b, c){
    this.street = a;
    this.city = b;
    this.zipCode = c;
}

function showAddress(address){
    for (let key in address) {
        console.log(key, address[key]);
    }
}

function areEqual(a1, a2){
    for (let key in a2){
        if(a1[key] !== a2[key]) return false;
    }
    return true;
}

function areSame(a1, a2){
    return a1 === a2;
}

const p1 = new Address('a', 'b', 'c');
const p2 = new Address('a', 'b', 'c',);
p2.number = '09';
const p3 = p2;

function post(title, body, author, views, comment, isLive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comment = [];
    this.isLive = isLive;
}
function comment(author, body){
    this.author = author;
    this.body = body;
}
let c1 = comment('a','b')
let p4 = new post('a', 'b', 'c', 'd', 'true');
p4.comment += c1;

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}

];

let restaurants = [
    { averagePerPerson: 5 }
]