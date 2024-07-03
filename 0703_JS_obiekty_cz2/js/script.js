const person = {
  name: "Michał",
  surname: "Kotliński",
  age: 47,
  gender: "male",
  pet: "dog",
  father: {
    name: "Wiesław",
    surname: "Wiesławski",
  },
  sayHello() {
    console.log(`Cześć! Jestem ${this.name} + ${this.surname}`);
  },
};

const currency = "EUR";

const exchangeData = {
  PLN: 45,
  [currency]: 200,
};

/*const {name, surname, age, gender} = person;
console.log(name, surname, age, gender);*/
//rest - obiekt z pozostałym właściwościami

const { name, surname, ...rest /*can be any name*/ } = person;
console.log(person);

const { city = "N/A" } = person; //domyślna wartość
const { surname: lastName } = person; //inna nazwa zmiennej/stałej

// obiekt jako argument funkcji
const getPersonFullName = (person) =>
  `${person.name} ${person.surname} ${person.pet}`;
console.log(getPersonFullName(person));

const {
  father: { name: fatherName },
} = person;
console.log(fatherName);

//łączenie obiektów "merge"

const personBasicData = {
  name: "Michał",
  surname: "Kotliński",
};

const personAdditionalData = {
  age: 47,
};

const allPersonData = {
  ...personBasicData,
  ...personAdditionalData,
};

console.log(allPersonData);

//klonowanie
const personCopy = { ...person };

//tzw. "shallow copy"
console.log(personCopy === person); //false
console.log(personCopy.father === person.father); //true

// for...in
//iteruje po właściwościach obiektu; kolejność może być różna
for (const property in person) {
  console.log(property,  person[property]);
}
