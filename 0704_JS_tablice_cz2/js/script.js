const numbers1 = [10, 45];
const numbers2 = [20, 49];
const numbers = [45, 16, 12, 18];

/*const [number1, , number3, number4 = 0, ...otherNumbers] = numbers;*/

//const allNumbers = [...numbers1, ...numbers2, 89];

/*klonowanie tablicy*/
//const numbersCopy = [...numbers];

/*Przekazywanie elementów tablicy jako argumenty funkcji*/
/*const numberArgTab = [12, 18, 19, 44, 64, 81];

console.log(Math.min(...numberArgTab));
console.log(Math.max(...numberArgTab));

/*Niezdefiniowana liczba argumentów funkcji*/
/*const myFunction = (firstParameter, ...otherParameters) => {
  console.log(`Pierwszy argument: ${firstParameter}`);
  console.log(`Liczba pozostałych argumentów: ${otherParameters.length}`);
};

myFunction(4, 8, 1, 9, 74, 51);

/*wyciąganie fragmentu tablicy*/
/*const seasons = ["wiosna", "lato", "jesień", "zima"];

const last2Seasons = seasons.slice(2);

const middle2Seasons = seasons.slice(1, 3);

const last3Seasons = seasons.slice(-3);

const allButLast = seasons.slice(0, -1);

/*indexOf, lastIndexOf*/
/*const numbersIndex = [15, 42, 45, "32", 32];

console.log(numbersIndex.indexOf(45));
console.log(numbersIndex.lastIndexOf(10));
console.log(numbersIndex.indexOf(5));
console.log(numbersIndex.lastIndexOf(5));*/

/*find*/
const numbersFind = [-7, 0, 10, -6, 45];

/*const isPositive = (number) => {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
};*/

/*krótsza wersja powyższej funkcji*/
/*const isPositive = (number) => {
  return number > 0;
};*/

/*jeszcze krótsza wersja w funkcji strzałkowej (zobacz także wiersz 77 *funkcja umieszczona w deklaracji stałej*/
//const isPositive = number => number > 0;

/*const isNegative = (number) => {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
};*/

/*krótsza wersja powyższej funkcji*/
const isNegative = (number) => {
  return number < 0;
};
/*zapis jeszce krótszy z funkcją w deklaracji stałej*/
const firstPositive = numbersFind.find((number) => number > 0);

const firstNegative = numbersFind.find(isNegative);

const firstPositiveIndex = numbersFind.findIndex((number) => number > 0);
const first100Index = numbersFind.findIndex((number) => number === 100);

const persons = [
  { name: "Michał", gender: "male" },
  { name: "Alina", gender: "female" },
];

const kociol = persons.find(({ name }) => name === "Michał");
const firstFemale = persons.find(({ gender }) => gender === "female");

/*findIndex - niemal identyczna metoda jak .find >> np. persons.findIndex(({name}) => name === "Michał") //0*/

/*includes*/
const guests = ["Włodek", "Irmina", "Melodia"];

console.log(guests.includes("Włodek")); //true
console.log(guests.includes("Zenek")); //false

/* .some - bardziej złożony sposób ".includes" - sprawdza, czy przynajmniej jeden element spełnia funkcję sprawdzającą*/
const tasks = [
  { content: "odkurzyć całą piwnicę", done: false },
  { content: "zrobić ciasto rabarbarowe", done: true },
];
//const firstDone = tasks.find(task => tasks.done);
/*krócej powyższe*/
const firstDone = tasks.find(({ done }) => done);

const isAnyTaskDone = tasks.some(({ done }) => done); //true

const numbersSome = [1, 3, 5, 7];

const isEven = (number) => number % 2 === 0;

//const isAnyNumberEven = numbersSome.some(number => number % 2 === 0) // false
/*krócej powyższe */
const isAnyNumberEven = numbersSome.some(isEven);

/*every - podobne do some, ale sprawdza czy wszystkie elementy*/

/*Mapowanie, odwzorowywanie*/
const numbersMap = [1, 5, 9];

const doubledNumbers = numbersMap.map((number) => number * 2);

const personsMap = [
  { name: "Michał", surname: "Kotlinski" },
  { name: "Alina", surname: "Kotlinska" },
];

//const getFullName = (person) => `${person.name} ${person.surname}`;
//krócej powyższe
const getFullName = ({ name, surname }) => `${name} ${surname}`;

const surnames = personsMap.map((person) => person.surname);

const fullNames = personsMap.map(getFullName);

/*reprezentacja HTML*/
const personsAsListItems = personsMap.map(
  (person) => `
    <li>
    ${getFullName(person)}
    </li>
`
);

const personsHTML = personsAsListItems.join("");

/*sortwoanie liczb*/
const numbersSort = [15, 71, 0];

numbersSort.sort((a, b) => a - b);
/*sortowanie alfabetyczne*/
const surnamesSort = ["Duda", "Dąbrowski"];

surnamesSort.sort((a, b) => a.localeCompare(b)); // ["Dąbrowski", "Duda"]
surnamesSort.sort((a, b) => b.localeCompare(a)); // ["Duda", "Dąbrowski"]
