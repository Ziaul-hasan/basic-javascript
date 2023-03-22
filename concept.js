// concept crekerz!!!

let array = [
    { lastName:'John'},
    'fname'
];

const deleteProperty =(arr)=>{
    let obj = arr[0];
    let prop = arr[1];
    if (prop in obj){
        delete obj[prop]
        return "YES"
    }
    else{
        return "NO"
    }
}
console.log(deleteProperty(array));
console.log(array);

// concept crekerz...

function temperatureConverter(valNum) {
    let convertTempDeci = (valNum -32)/ 1.8;
    let convertTempDeci2 = convertTempDeci.toFixed(2);
    let convertTemp = parseFloat(convertTempDeci2);
    return convertTemp;
}
console.log(temperatureConverter(62.5));

const x = 2^3;
console.log(x);

// Write a function to find a prime number...

const isPrime = (num) => {
    let primeNum = num != 1;
    let sqrtNum = Math.floor(Math.sqrt(num));
    for(let i=2; i< sqrtNum + 1; i++){
        if(num % i === 0){
            return false;
            break;
        }
    }
    return primeNum;
}
console.log(isPrime(1))

// write a function to evalute the volume of a Triangle...

const volumeTriangle = (a, b, c, h) =>{
    return (1/4*h*Math.sqrt(-(a**4)+2*a*a*b*b+2*a*a*c*c-(b**4)+2*b*b*c*c-(c**4))).toFixed(2);
}

console.log("volume of the Triangle", volumeTriangle(2, 4, 4, 7));

console.log(4**2);

// Write a function to find the second largest number of an array...

const secondHeightNum = (arr) => {
    const myNumber = arr.sort(function(a,b){return b -a})[1];
    return myNumber;
}
console.log(secondHeightNum([12, 16, 19, 8, 33, 21, 9, 15, 41, 39]));

// Write a function to find the second lowest number of an array...

const secondLowestNum = (lowArry) => {
    const myNumber = lowArry.sort(function(a,b){return a - b})[1];
    return myNumber;
}
console.log(secondLowestNum([12, 16, 19, 8, 33, 21, 9, 15, 41, 39]));

// Write a function to find the largest number of an array...

const heighestNum = (array) => {
   const myNum = Math.max(...array);
   return myNum;
}
console.log(heighestNum([12, 16, 19, 8, 33, 21, 9, 15, 41, 39]));

// Write a function to find the lowest number of an array...

const lowestNum = (a) => {
    const myNum = Math.min(...a);
    return myNum;
}
console.log(lowestNum([12, 16, 19, 8, 33, 21, 9, 15, 41, 39]))
