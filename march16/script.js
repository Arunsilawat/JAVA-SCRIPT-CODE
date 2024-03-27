{
    let a = 10;
    const b = 20;
    console.log(a);
    console.log(a);
}
const firstName = "Arun";
console.log(firstName, typeof firstName);

let age = 20;
console.log(age, typeof age);

let eligible = true;
console.log(eligible, typeof eligible);

let course;
console.log(course, typeof course);

let aptNumber = null;
console.log(aptNumber, typeof aptNumber);

const arr = [1,2,3,4,5];
console.log(arr, typeof arr);

let person = {
    name: "john",
    age:34
};
console.log(person, typeof person);


let name = "john";
let newName = name ;

newName = "Arun";
console.log(name,newName);

let person = {
    name: "Geeta";
    age: 30;
};
let newPerson = person;
person.name = "seeta";
console.log(person,newPerson);