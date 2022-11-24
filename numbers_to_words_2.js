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
    return arr
        .map(number => number.toString().split(''))
        .map(digits => {
            let negative = digits[0] === '-';
            digits = negative ? digits.slice(1) : digits;
            return digits
                .map((digit, index) =>
                    (negative && index === 0 ? 'Minus ' : '') + words[digit])
                .join(', ');
        });
}


let numberArray = [10, 222, -9];
let wordArray = numbersToWords(numberArray);
console.log(wordArray);