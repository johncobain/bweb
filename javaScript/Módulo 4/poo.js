/*
-Programação Orientada a Objetos (POO - OOP)
-Programação Procedural
-Programação Funcional (PF - FP)

-Prototype-based procedural language

#OOP
-CLASSES
-FUNÇÕES/OBJETOS
*/
class Person{
    // lastName = 'Smith';
    // steps = 0;
    // _age = 10;

    static hands = 2;
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz OI e tem ${Person.hands} mãos`);
    }

    static sayHello(){
        console.log('hello');
    }

    // takeAStep(n){
    //     this.steps += n;
    // }

    // get fullName(){
    //     return `${this.name} ${this.lastName}`;
    // }

    // get age(){
    //     return this._age;
    // }

    // set age(x){
    //     if(typeof x == 'number'){
    //         this._age = x;
    //     }
    // }
}

function createPerson(name, age){
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('John', 17);
p1.sayHi();
Person.sayHello();

console.log(p1);





// class Student extends Person {

//     constructor(name, id){
//         super(name);
//         this.id = id;
//     }

//     sayHi(){
//         console.log(`${this.name} é um estudante e diz OI`);
//     }
// }

// let p1 = new Student('John', 1);
// p1.age = 20;

// let p2 = new Person('Peter');

// console.log(`${p1.name} tem ${p1.age} anos e a matrícula #${p1.id}`);
// p1.sayHi();
// console.log(`${p2.name} tem ${p2.age} anos`);
// p2.sayHi();

// //João
// let p1 = new Person('John');
// p1.takeAStep(2);
// p1.age = 20;
// //Maria
// let p2 = new Person('Marry');
// p2.lastName = 'Mayer';
// //Pedro
// let p3 = new Person('Peter');
// p3.takeAStep(15);

// console.log(`${p1.fullName} has ${p1.age} years`);
// console.log(`${p1.steps} steps`);
// console.log(`${p2.fullName} has ${p2.age} years`);
// console.log(`${p2.steps} steps`);
// console.log(`${p3.fullName} has ${p3.age} years`);
// console.log(`${p3.steps} steps`);
