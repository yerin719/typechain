interface Human {
    name : string;
    age: number;
    gender: string;
}
const person = {
    name : "yerin",
    age: 27,
    gender: "f",
}
const sayHi = (person : Human): string => {
    return `${person.name} ${person.age} ${person.gender}!`
}

console.log(sayHi(person));

export {};