const string = "tekst";

const upperCased = string.toUpperCase();

console.log(upperCased);
console.log(string);

const number = 5.05444;

const numberFormatted = number.toFixed();
console.log(numberFormatted);

const person = { name: "Michał" };

person.name = "Krzysiek";
console.log(person.name);
console.log(person);
person.surname = "Dąbrowski";
console.log(person);

const cars = ["beemka"];
console.log(cars);
cars.push("merc");
console.log(cars);
cars.pop(); //usuwanie ostatniego elementu z tablicy
console.log(cars);

//praca z tablicami i obiektami bez mutowania

const personOrig = {
  name: "Michał",
  surname: "Kotliński",
};

const updatedPerson = {
  ...personOrig,
  name: "Ernest",
};

console.log(personOrig);
console.log(updatedPerson);

const updatedPersonWithAge = {
  ...updatedPerson,
  age: 47,
};

console.log(updatedPersonWithAge);

const { name, ...personWithoutName } = person;
console.log(person);
console.log(personWithoutName);
console.log(person);

const tasks = [
  { title: "zmontować lekcję", done: false },
  { title: "zasadzić dzrewo", done: true },
];
