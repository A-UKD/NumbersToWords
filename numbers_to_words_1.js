function numbersToWords(arr) {
    const words = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine'
    ];
    return arr.map(number => words[number]);
}

let numberArray = [0, 1, 6];
let wordArray = numbersToWords(numberArray);
console.log(wordArray);