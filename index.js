// Task 1
const movies = ['CIVIL WAR', 'MONKEY MAN', 'THE FIRST OMEN', 'GODZILLA X KONG: THE NEW EMPIRE', 'ARCADIAN'];

for (let movie of movies) {
    console.log(movie);
}

// Task 2
const carManufacturers = ['Audi', 'Peugeot', 'Renault', 'BMW', 'Porsche'];

const carManufacturersString = carManufacturers.join(',');
console.log(carManufacturersString);

const carManufacturersArray = carManufacturersString.split(',');
console.log(carManufacturersArray);

// Task 3
const friends = ['Anton', 'Sergiy', 'Artem', 'Nazar', 'Dima'];

const greetings = friends.map(friend => 'Hello ' + friend);
console.log(greetings);

// Task 4
const numbers = [0, 10, 22, 31, 46];
const booleans = numbers.map(num => Boolean(num));
console.log(booleans);

// Task 5
const numbersToSort = [1, 6, 7, 8, 3, 4, 5, 6];
numbersToSort.sort((a, b) => b - a);
console.log(numbersToSort);

// Task 6
const numbersToFilter = [1, 6, 7, 8, 3, 4, 5, 6];
const filteredNumbers = numbersToFilter.filter(num => num > 3);
console.log(filteredNumbers);

// Task 7
const findIndex = (arr, num) => arr.indexOf(num);

const numbersToFindIndex = [6, 4, 2, 1, 3];
console.log(findIndex(numbersToFindIndex, 3)); 

// Task 8
let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}

// Task 9
const isPrime = (num) => {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

let numberPrime = 2;
while (numberPrime < 100) {
  if (isPrime(numberPrime)) {
      console.log(numberPrime);
  }
  numberPrime++;
}

// Task 10
let numberOdd = 1;
while (numberOdd < 100) {
    console.log(numberOdd);
    numberOdd += 2;
}


