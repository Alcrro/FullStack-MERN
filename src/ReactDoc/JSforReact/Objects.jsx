const person = {
  name: "Alex",
  age: "27",
  isMarried: false,
};

//used in vanila JS:
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

//Destruction and used with props
const { name, age, isMarried } = person;

//Ex 2

//when the key has the same value we don;t need to repeat
const name2 = "Cristi";
const person2 = {
  name2,
  age2: 20,
  isMarried2: false,
};

//How to change one single properties if we have 2 person with same properties less then name
const person3 = {
  name2: "Alex",
  age2: 20,
  isMarried2: false,
};

//R:
const person4 = { ...person, name: "Cristi" };

const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Dani"];
console.log(names2);
