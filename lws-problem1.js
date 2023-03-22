// write a function that can print any random number between any given number (including them)...
// there are two fomulas to find random number between any given number....
// between numbers excluded the numbers... 
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }
// between numbers including them...
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomNumbers(1, 6));

// How can you orders names of students in your class sequentially?

const names = ['Nepu', 'Tareq', 'Mitul', 'Arman', 'Shimul', 'Arif', 'Shaon'];
console.log(names.sort());

// How can you orders roll numbers of students in your class sequentially?

const roll_numbers = [5, 3, 8, 9, 15, 12, 4, 1, 11, 2, 6, 14, 7, 13];
console.log(roll_numbers.sort(function (a, b) {
    return b - a;
}))

// Write a function that can tell us whether a function is leap year or not?

// function isLeapYear (year) {
//     if( year % 4 === 0 || (year % 4 === 0 && year % 100 !== 0)){
//         return (`${year} is a Leap Year !!`)
//     } 
//     else{
//         return (`${year} is not a Leap Year !!`)
//     }
// }

const isLeapYear = year => {
    if (year % 4 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return (`${year} is a Leap Year !!`)
    }
    else {
        return (`${year} is not a Leap Year !!`)
    }
}
console.log(isLeapYear(2024));

// How you determine the number of vowels in a sentences?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const countVowels = sentence => {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(letter => {
        if (vowels.includes(letter)) {
            count++
        }
    })
    return count;
}
console.log(countVowels('I am a Web developer'));

// How Would you extract the duplicate number in an array?

const numbers = [1, 4, 3, 5, 3, 6, 4, 7, 8, 5, 10, 7];
const duplicate = numbers.filter((value, index, array) => {
    return array.indexOf(value) !== index;
})

console.log(duplicate);

// How would you extract the unique number in an array?

const num = [1, 4, 3, 5, 3, 6, 4, 7, 8, 5, 10, 7];
const unique = num.filter((value, index, array) => {
    return array.indexOf(value) == index;
})

console.log(unique);

// How to write a reverse string of a given sentence??

const reverseSentence = sentence => {
    return Array.from(sentence).reverse().join('');
}
console.log(reverseSentence('my name is ziaul hasan shaon'));

// How to find how many times the sumit used in following sentence. And first time from which position it found??

const line = 'Learn with sumit is all about teaching web development skills and techniques in an efficient and practicle manner. If you are just starting in web development. Learn with sumit has all tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack develoer. Learn with sumit also dives into advanced topics using the latest best practices for you seasoned web developer.';
const matches = line.match(/Sumit/gi);
console.log(matches ? ('found', matches.length) : ('not found', 0));
let position = line.search(/sumits/i);
console.log(position >= 0 ? position : 'Not found');

// input = linearSearch(['a', 'b', 'c', 'd', 'e'], 'c');
// output = 2, 'not found'
// implement the linearSearch function...

const output = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return 'Not found'
}

console.log(output(['a', 'b', 'c', 'd', 'e'], 'c'));

// How to find the longest string from an array....??

const longestWord = names => {
    let longestString = '';
    for (let namm of names) {
        if (namm.length > longestString.length) {
            longestString = namm;
        }
    }
    return [longestString, names.indexOf(longestString)];
}

console.log(longestWord(['shaon', 'nepu', 'tareq', 'shakib', 'arman', 'mitul']));


// How to find number that is devisable with 3 or 5 and both 3 & 5 from number 1-100.

const fizzBuzz = number => {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is fizzBuzz`)
        }
        else if (i % 3 === 0) {
            console.log(`${i} is fizz`)
        }
        else if (i % 5 === 0) {
            console.log(`${i} is buzz`)
        }
        else {
            i;
        }
    }
}

fizzBuzz(100);

// How to find falsy value from an array and eleminate from the array??
// Falsy value... {undefined, null, NaN, '', false, 0};

const mixedArr = ['lws', undefined, 'learn with sumit', 'sumit', true, null, 'apple', 'K', false, NaN, '', 'Thanks to all'];

const truthyArr = arr =>
    // arr.filter(element => {
    //method 1...
    // if (element){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    // method 2 (shortcut)
    arr.filter(Boolean);
// Boolean is a function that returns true/ false...
// })

console.log(truthyArr(mixedArr));

// How to find falsy value from an object and eleminate from object??

const object = {
    a: 'lws',
    b: 'learn with sumit',
    c: undefined,
    d: true,
    e: false,
    f: 'false',
    g: null,
    h: 24,
    i: NaN,
    j: 0,
    k: 'Thanks to all'
}

const trueObj = obj => {
    for (let key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
    return obj;
}

console.log(trueObj(object));


const solution = (letter) => {
    let Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (Vowels.includes(letter)) {
        return 'the letter is vowel'
    }
    else {
        return 'the letter is consonant'
    }
}

  console.log(solution('e'));

  const totalCost = (products) => {
    return products.reduce((previous , current) => previous + current.price, 0)  
  };
  const products = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ];
  console.log(totalCost(products))


  