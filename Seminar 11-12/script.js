//задание 1
var city1=new Object();
city1.name = "CityN";
city1.population = "10млн";


//задание 2
let city2 = {
    name:"CityM",
    population:"10млн"
}


//задание 3
city1.getName = function (){
    return this.name
}


console.log(city1.getName())


city2.getName = function (){
    return this.name
}


console.log(city2.getName())


//задание 4
city1.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}

city2.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}


console.log(city1.exportStr());
console.log(city2.exportStr());


//задание 5
function GetObj(){
    return this;
}

city1.getCity = GetObj;
city2.getCity = GetObj;


console.log(city1.getCity().getName())
console.log(city2.getCity().population)


//задание 6
let obj = new Object()
obj.Method1= function (){return this}
obj.Method2= function (){return this}
obj.Method3= function (){console.log("Строка 3")}

obj.Method1().Method2().Method3()


//Задание 7
let d1 = ['45', '78', '10', '3']

d1[7] = '100';
console.log(d1)

//Задание 8
var d2 = [45, 78, 10, 3];
sum2 = 0;
for (let i = 0; i < d2.length; i++){
    sum2 += d2[i]
}

console.log(sum2)

//Задание 9
var d3 = [45, 78, 10, 3];
d3[4] = 100;
sum3 = 0;
for(let i = 0; i <d3.length; i++){
    sum3 += d3[i]
}
console.log(sum3)

//Задание 10
var d4 = [45, 78, 10, 3];
function my(a,b){
    return a - b;
}
d4.sort(my);
console.log(d4);


//задание 15
var Card = {
    from:"Moscow",
    to:"SPb",
    get Show() {
        return "from:"+this.from + " " + "to:" + this.to;
    },

    set Show(value) {
        var split = value.split(' ');
        this.from = split[0];
        this.to = split[1];
    }
}


let c1="Екатеринбург Москва"
Card.Show=c1
console.log(Card.Show)


//задание 16
class Human {
    #name;
    #age;
    #height;

    constructor(name, age, height) {
        this.#name = name;
        this.#age = age;
        this.#height = height;
    }
    getInfo() {
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
    get firstname() {
        return this.#name;
    }
}

let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];


for (let human of humans)
    console.log(human.getInfo());

//Задание 18
var date = new Date(2045, 0, 1, 0, 0, 0, 0)
dt1 = date


console.log(dt1);


//задание 19
let now=new Date()
let dt2= now.getTime()


console.log(dt2)


//Задание 20
function getDays (month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(getDays(2, 2002));
console.log(getDays(2, 2020));