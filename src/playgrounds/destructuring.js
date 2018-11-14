// Object destructuring

const person = {
  name: "Arek",
  age: 44,
  location: {
    city: "Wloclawek",
    temp: 10
  }
};

const { name: firstName = "Anonymous", age } = person;
const { city: loc, temp: hot } = person.location;

console.log(
  `${firstName} is ${age} years old and live in ${loc} where temperature is ${hot}`
);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);

// Array destructuring

const address = [" Elm Steet", "Wloclawek", "Kuj-Pom", "87-800"];

const [street, city, district, zipcode] = address;

console.log(street, city, district, zipcode);

const item = ["Coffee (hot)", "$2.0", "$2.5", "$2.75"];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);
