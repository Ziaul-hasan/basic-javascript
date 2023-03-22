// let inputArray = [];

const findOddNums = () => {
    const inputField = document.getElementById('number');
    const inputFieldString = inputField.value;
    // const inputFieldNum = parseInt(inputFieldString);
    inputField.value = '';
    const inputArray = inputFieldString.split(',');
    // inputArray.push((Array.from(inputFieldString).join('')));
    console.log(inputArray)
    const numArray = inputArray.map(Number);
    console.log(numArray)
    const oddNum = numArray.filter(on => on % 2 === 1).join(' ');
    const outPut = document.getElementById('output');
    outPut.innerHTML = `${oddNum} .`;
}

const findEvenNums = () => {
    const inputField = document.getElementById('number2');
    const inputFieldString = inputField.value;
    inputField.value = '';
    const inputArray = inputFieldString.split(',');
    const numArray = inputArray.map(Number);
    const evenNum = numArray.filter(en => en % 2 === 0).join(' ');
    const outPut = document.getElementById('output2');
    outPut.innerHTML = `${evenNum}. `;
}

const findReverseSentence = () => {
    const inputField = document.getElementById('sentence');
    const inputFieldString = inputField.value;
    inputField.value = '';
    const inputArray = Array.from(inputFieldString).reverse().join('')
    const outPut = document.getElementById('output3');
    outPut.innerHTML = `${inputArray}. `
}

const findFiboSeries = () =>{
    const inputField = document.getElementById('series');
    const inputFieldString = inputField.value;
    const inputFieldNum = parseInt(inputFieldString);
    inputField.value = '';
    let series = [0, 1];
    for (let i = 2; i <= inputFieldNum; i++){
        series[i] = series[i-1] + series[i-2];
    }
    // console.log(series);
    const outPut = document.getElementById('output4');
    outPut.innerHTML = `${series}. `
}

const findPrimeNum = () => {
    const inputField = document.getElementById('prime');
    const inputFieldString = inputField.value;
    let inputFieldNum = Number(inputFieldString);
    inputField.value = '';
    const outPut = document.getElementById('output5');
    let primeNum = inputFieldNum != 1;
    let primeSqrt = Math.floor(Math.sqrt(inputFieldNum));
    for(let i = 2; i < primeSqrt +1; i++){
        if(inputFieldNum % i === 0){
            return outPut.innerHTML = `${false}. `;
            break;
        }
    }
    return  outPut.innerHTML = `${primeNum}. `
}

const findTypeOfLetter = () => {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const inputField = document.getElementById('vowel');
    const inputFieldLetter = inputField.value;
    inputField.value = '';
    const outPut = document.getElementById('output6');
    if(vowel.includes(inputFieldLetter)){
        return outPut.innerHTML = 'Vowel';
    }
    else{
        return outPut.innerHTML = 'Consonant';
    }
    
}

const findNumOfVowel = () => {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const inputField = document.getElementById('countVowel');
    const inputFieldWordSen = inputField.value;
    inputField.value = '';
    const outPut = document.getElementById('output7');
    let count = 0;
    const wordArray = Array.from(inputFieldWordSen);
    wordArray.forEach(letter => {
        if(vowel.includes(letter)){
            count++;
        }
    })
    outPut.innerHTML = `${count}`;
}

const findHeightNum = () => {
    const inputField = document.getElementById('heighest');
    const inputFieldString = inputField.value;
    inputField.value = '';
    const inputArray = inputFieldString.split(',');
    const numArray = inputArray.map(Number);
    const heightNum = Math.max(...numArray);
    const outPut = document.getElementById('output8');
    outPut.innerHTML = `${heightNum}`;
}

const findSecHeightNum = () => {
    const inputField = document.getElementById('secheighest');
    const inputFieldString = inputField.value;
    inputField.value = '';
    const inputArray = inputFieldString.split(',');
    const numArray = inputArray.map(Number);
    const secheightNum = numArray.sort(function(a,b){return b - a})[1];
    const outPut = document.getElementById('output9');
    outPut.innerHTML = `${secheightNum}`;
}